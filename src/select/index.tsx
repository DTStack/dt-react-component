import React, { useRef } from 'react';
import { Select as OriginSelect, SelectProps, Spin } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
import classNames from 'classnames';
import { Empty } from 'dt-react-component';

import './index.scss';

interface ExtendedSelectProps<
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> extends SelectProps<ValueType, OptionType> {
    maxRows?: number;
}

export default function Select<
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
>({
    style,
    maxRows,
    dropdownClassName,
    onSearch,
    onSelect,
    ...restProps
}: ExtendedSelectProps<ValueType, OptionType>) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isComposingRef = useRef(false);
    const compositionEndValueRef = useRef<string>();
    // 三种 size 的行高相差 8px，保留原有 medium 的行高与边界补偿。
    const rowHeight = { small: 20, middle: 28, large: 36 }[restProps.size || 'middle'];
    const maxHeight = maxRows && maxRows > 0 ? maxRows * rowHeight + 4 : undefined;
    const isScrollEnabled = maxHeight !== undefined;

    const handleSearch: SelectProps<ValueType, OptionType>['onSearch'] = (value) => {
        if (isComposingRef.current) return;
        // compositionEnd 后可能再次触发相同的 onSearch，避免重复请求
        if (compositionEndValueRef.current === value) {
            compositionEndValueRef.current = undefined;
            return;
        }
        compositionEndValueRef.current = undefined;
        onSearch?.(value);
    };

    const handleCompositionStart = () => {
        isComposingRef.current = true;
    };

    const handleCompositionEnd = (event: React.CompositionEvent<HTMLDivElement>) => {
        const target = event.target as HTMLInputElement;
        if (!target.classList.contains('ant-select-selection-search-input')) return;

        isComposingRef.current = false;
        compositionEndValueRef.current = target.value;
        onSearch?.(target.value);
        requestAnimationFrame(() => {
            compositionEndValueRef.current = undefined;
        });
    };

    const handleSelect: SelectProps<ValueType, OptionType>['onSelect'] = (value, option) => {
        if (isScrollEnabled) {
            // 等待选中项渲染完成后滚动到底部
            requestAnimationFrame(() => {
                const scrollElement =
                    containerRef.current?.querySelector<HTMLElement>('.ant-select-selector');

                scrollElement?.scrollTo({
                    top: scrollElement.scrollHeight,
                    behavior: 'smooth',
                });
            });
        }

        onSelect?.(value, option);
    };

    return (
        <div
            ref={containerRef}
            className={isScrollEnabled ? 'dtc-select--scroll' : undefined}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
        >
            <OriginSelect
                notFoundContent={restProps.loading ? <Spin size="small" /> : <Empty />}
                {...restProps}
                dropdownClassName={classNames(
                    dropdownClassName,
                    isScrollEnabled && 'dtc-select__scroll-dropdown'
                )}
                style={{ maxHeight, ...style }}
                onSearch={handleSearch}
                onSelect={handleSelect}
            />
        </div>
    );
}
