import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Button, Checkbox, Col, Dropdown, type DropDownProps, Row, Space } from 'antd';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import type {
    CheckboxGroupProps,
    CheckboxOptionType,
    CheckboxValueType,
} from 'antd/lib/checkbox/Group';
import classNames from 'classnames';
import { isEqual } from 'lodash';
import List from 'rc-virtual-list';

import './style.scss';

interface IDropdownSelectProps
    extends Pick<DropDownProps, 'getPopupContainer'>,
        Pick<CheckboxGroupProps, 'value' | 'defaultValue' | 'options' | 'onChange'> {
    children: ReactNode;
    className?: string;
}

const prefix = 'dtc-dropdown-select';
const ITEM_HEIGHT = 32;
const MAX_HEIGHT = 264;

export default function Select({
    className,
    value,
    defaultValue,
    options: rawOptions,
    children,
    getPopupContainer,
    onChange,
}: IDropdownSelectProps) {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<CheckboxValueType[]>(value || defaultValue || []);

    const handleCheckedAll = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            setSelected(options?.map((i) => i.value) || []);
        } else {
            handleReset();
        }
    };

    const handleSubmit = () => {
        onChange?.(selected);
        setVisible(false);
    };

    const handleReset = () => {
        // Clear checked but disabled item
        setSelected(disabledValue);
    };

    const handleChange = (e: CheckboxChangeEvent) => {
        const { checked, value } = e.target;
        const next = checked ? [...selected, value] : selected?.filter((i) => i !== value);
        setSelected(next);
    };

    const handleShadow = (target: HTMLDivElement) => {
        if (target) {
            if (!target.querySelector(`.${prefix}__shadow`)) {
                const shadow = document.createElement('div');
                shadow.classList.add(`${prefix}__shadow`);
                target.insertBefore(shadow, target.firstChild);
            }

            const scrollbar_thumb = target.querySelector<HTMLDivElement>(
                '.rc-virtual-list-scrollbar-thumb'
            );
            const shadow = target.querySelector<HTMLDivElement>(`.${prefix}__shadow`);

            if (parseFloat(scrollbar_thumb?.style.top as string) > 0) {
                shadow?.classList.add('active');
            } else {
                shadow?.classList.remove('active');
            }
        }
    };

    useEffect(() => {
        if (value !== undefined && value !== selected) {
            setSelected(value || []);
        }
    }, [value]);

    // Always turn string and number options into complex options
    const options = useMemo<CheckboxOptionType[]>(() => {
        return (
            rawOptions?.map((i) => {
                if (typeof i === 'string' || typeof i === 'number') {
                    return {
                        label: i,
                        value: i,
                    };
                }

                return i;
            }) || []
        );
    }, [rawOptions]);

    const disabledValue = useMemo<CheckboxValueType[]>(() => {
        return options?.filter((i) => i.disabled).map((i) => i.value) || [];
    }, [options]);

    const resetDisabled = selected.every((i) => disabledValue?.includes(i));

    // If options' number is larger then the maxHeight, then enable virtual list
    const virtual = options.length > Math.floor(MAX_HEIGHT / ITEM_HEIGHT);

    // ONLY the options are all be pushed into value array means select all
    const checkAll =
        !!selected?.length && isEqual(options.map((i) => i.value).sort(), [...selected].sort());

    // At least one option's value is included in value array but not all options means indeterminate select
    const indeterminate =
        !!selected?.length &&
        !isEqual(options.map((i) => i.value).sort(), [...selected].sort()) &&
        options.some((o) => selected.includes(o.value));

    const overlay = (
        <>
            <Row>
                <Col span={24} className={`${prefix}__col`}>
                    <Checkbox
                        onChange={handleCheckedAll}
                        checked={checkAll}
                        indeterminate={indeterminate}
                    >
                        全选
                    </Checkbox>
                </Col>
                <Col span={24} className={`${prefix}__menu`}>
                    <Checkbox.Group value={selected}>
                        <List
                            data={options}
                            itemKey="value"
                            itemHeight={ITEM_HEIGHT}
                            // ONLY access height when enable virtual
                            height={virtual ? MAX_HEIGHT : undefined}
                            virtual={virtual}
                            onScroll={(e) =>
                                handleShadow(
                                    (e.target as HTMLDivElement).parentElement as HTMLDivElement
                                )
                            }
                        >
                            {(option) => (
                                <Col
                                    span={24}
                                    key={option.value.toString()}
                                    className={`${prefix}__col`}
                                >
                                    <Checkbox
                                        disabled={option.disabled}
                                        value={option.value}
                                        onChange={handleChange}
                                    >
                                        {option.label}
                                    </Checkbox>
                                </Col>
                            )}
                        </List>
                    </Checkbox.Group>
                </Col>
            </Row>
            <Space size={8} className={`${prefix}__btns`}>
                <Button size="small" disabled={resetDisabled} onClick={handleReset}>
                    重置
                </Button>
                <Button size="small" type="primary" onClick={handleSubmit}>
                    确定
                </Button>
            </Space>
        </>
    );

    return (
        <Dropdown
            visible={visible}
            overlayClassName={classNames(`${prefix}__container`, className)}
            trigger={['click']}
            overlay={overlay}
            getPopupContainer={getPopupContainer}
            onVisibleChange={(visible) => {
                if (visible) {
                    setVisible(true);
                } else {
                    handleSubmit();
                }
            }}
        >
            {children}
        </Dropdown>
    );
}
