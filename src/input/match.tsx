import React, { useState } from 'react';
import { Input, Tooltip, type InputProps } from 'antd';
import classNames from 'classnames';
import { CaseSensitiveIcon, PreciseIcon, FrontIcon, TailIcon } from './icons';
import './match.scss';

/**
 * fuzzy 是默认不选中状态
 */
export type SearchType = 'fuzzy' | 'caseSensitive' | 'precise' | 'front' | 'tail';

interface IMatchProps extends Omit<InputProps, 'suffix'> {
    /**
     * 当前匹配项
     */
    searchType?: SearchType;
    /**
     * 过滤匹配项数组
     */
    filterOptions?: SearchType[];
    /**
     * 匹配项修改的回调函数
     */
    onTypeChange?: (type: SearchType) => void;
    /**
     * 搜索的回调函数
     */
    onSearch?: (value: string, searchType: SearchType) => void;
}

const searchTypeList = [
    {
        key: 'caseSensitive',
        tip: '区分大小写匹配',
    },
    {
        key: 'precise',
        tip: '精确匹配',
    },
    {
        key: 'front',
        tip: '头部匹配',
    },
    {
        key: 'tail',
        tip: '尾部匹配',
    },
] as const;

export default function Match({
    className,
    value,
    searchType,
    filterOptions = searchTypeList.map((i) => i.key),
    onTypeChange,
    onSearch,
    onChange,
    onPressEnter,
    ...restProps
}: IMatchProps) {
    const [internalValue, setValue] = useState<string>('');
    const [internalSearchType, setSearchType] = useState<SearchType>('fuzzy');

    const handleTypeChange = (key: SearchType) => {
        const next = realSearchType === key ? 'fuzzy' : key;
        onTypeChange?.(next);
        setSearchType(next);
    };

    const options = searchTypeList.filter((i) => filterOptions.includes(i.key));

    const realSearchType = searchType || internalSearchType;
    const realValue = value || internalValue;

    return (
        <Input
            className={classNames(className, 'dtc-input-match')}
            value={realValue}
            suffix={
                <div className="dtc-input-match-items">
                    {options.map((op) => (
                        <Tooltip key={op.key} title={op.tip}>
                            {(() => {
                                switch (op.key) {
                                    case 'caseSensitive':
                                        return (
                                            <CaseSensitiveIcon
                                                className={classNames(
                                                    'dtc-input-match-suffixItem',
                                                    realSearchType === op.key &&
                                                        'dtc-input-match-suffixItem__active'
                                                )}
                                                onClick={() => handleTypeChange(op.key)}
                                            />
                                        );
                                    case 'precise':
                                        return (
                                            <PreciseIcon
                                                className={classNames(
                                                    'dtc-input-match-suffixItem',
                                                    realSearchType === op.key &&
                                                        'dtc-input-match-suffixItem__active'
                                                )}
                                                onClick={() => handleTypeChange(op.key)}
                                            />
                                        );
                                    case 'front':
                                        return (
                                            <FrontIcon
                                                className={classNames(
                                                    'dtc-input-match-suffixItem',
                                                    realSearchType === op.key &&
                                                        'dtc-input-match-suffixItem__active'
                                                )}
                                                onClick={() => handleTypeChange(op.key)}
                                            />
                                        );
                                    case 'tail':
                                        return (
                                            <TailIcon
                                                className={classNames(
                                                    'dtc-input-match-suffixItem',
                                                    realSearchType === op.key &&
                                                        'dtc-input-match-suffixItem__active'
                                                )}
                                                onClick={() => handleTypeChange(op.key)}
                                            />
                                        );
                                    default:
                                        break;
                                }
                            })()}
                        </Tooltip>
                    ))}
                </div>
            }
            onPressEnter={(e) => {
                onSearch?.((e.target as HTMLInputElement).value, realSearchType);
                onPressEnter?.(e);
            }}
            onChange={(e) => {
                onChange?.(e);
                setValue(e.target.value);
            }}
            {...restProps}
        />
    );
}
