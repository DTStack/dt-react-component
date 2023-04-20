import React, { useState } from 'react';
import { Button, Checkbox, Col, Dropdown, Row, Space, type DropDownProps } from 'antd';
import classNames from 'classnames';
import List from 'rc-virtual-list';
import { isEqual } from 'lodash';
import type { CheckboxGroupProps, CheckboxValueType } from 'antd/lib/checkbox/Group';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import './style.scss';

interface IDropdownSelectProps
    extends Pick<DropDownProps, 'getPopupContainer'>,
        Required<Pick<CheckboxGroupProps, 'value' | 'options' | 'onChange'>> {
    children: React.ReactNode;
    className?: string;
    onSubmit?: (value: CheckboxValueType[]) => void;
}

const prefix = 'dtc-dropdown-select';
const ITEM_HEIGHT = 32;
const MAX_HEIGHT = 264;

export default function Select({
    className,
    value,
    options: rawOptions,
    children,
    getPopupContainer,
    onChange,
    onSubmit,
}: IDropdownSelectProps) {
    const [visible, setVisible] = useState(false);

    const handleCheckedAll = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            onChange?.(options?.map((i) => i.value) || []);
        } else {
            handleReset();
        }
    };

    const handleSubmit = () => {
        onSubmit?.(value);
        setVisible(false);
    };

    const handleReset = () => {
        // Clear checked but disabled item
        onChange?.(options?.filter((i) => i.disabled).map((i) => i.value) || []);
    };

    const handleShadow = (target: HTMLDivElement) => {
        if (target) {
            if (!target.querySelector(`.${prefix}__shadow`)) {
                const shadow = document.createElement('div');
                shadow.classList.add(`${prefix}__shadow`);
                target.insertBefore(shadow, target.firstChild);
            }

            if (
                Number(
                    target
                        .querySelector<HTMLDivElement>('.rc-virtual-list-scrollbar-thumb')
                        ?.style.top.replace('px', '')
                ) > 0
            ) {
                target.querySelector<HTMLDivElement>(`.${prefix}__shadow`)?.classList.add('active');
            } else {
                target
                    .querySelector<HTMLDivElement>(`.${prefix}__shadow`)
                    ?.classList.remove('active');
            }
        }
    };

    // Always turn string and number options into complex options
    const options = rawOptions.map((i) => {
        if (typeof i === 'string' || typeof i === 'number') {
            return {
                label: i,
                value: i,
            };
        }

        return i;
    });

    const resetDisabled = value.every((i) =>
        options
            ?.filter((i) => i.disabled)
            .map((i) => i.value)
            ?.includes(i)
    );

    // If options' number is larger then the maxHeight, then enable virtual list
    const virtual = options.length > Math.floor(MAX_HEIGHT / ITEM_HEIGHT);

    // ONLY the options are all be pushed into value array means select all
    const checkAll = !!value?.length && isEqual(options.map((i) => i.value).sort(), value.sort());
    // At least one option's value is included in value array but not all options means indeterminate select
    const indeterminate =
        !!value?.length &&
        !isEqual(options.map((i) => i.value).sort(), value.sort()) &&
        options.some((o) => value.includes(o.value));

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
                    <Checkbox.Group onChange={onChange} value={value}>
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
                                    <Checkbox disabled={option.disabled} value={option.value}>
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
