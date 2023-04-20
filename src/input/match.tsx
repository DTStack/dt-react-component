import React, { useState } from 'react';
import { Input, Space, Tooltip, type InputProps } from 'antd';
import classNames from 'classnames';
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
        imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABhElEQVRYhe2VPUvDQByHf5cmrRolQyHtYJ18gy4O4qSDg64i2II4SAvFNoWgX8ShQ64RBxFd6hdwc1QXQRCEirgo7WAXhxJJ079LC+LiRQWH3jPey8PD3cEBEolEMugw0YWc8zqAqRDuh1KpNB0+adAQvoI+nPM9APuMsblisXj72wD1B3vyRHQOIAdg90ucGQTBsGmaz9lsNhCRhToBzvkCgFNVVVc7nc617/sp27bfe3MHAJaJqMkYM3zfX7Rt++07pxImAEAewHGhUHgCcK9p2hoA1Gq1KBE9xuPxtGVZS4yxV03TVkSEwgGu644A2AQwX61WXQB6LwiZTMYHYLRarUvHca6IKA1gTMQr/AaIaANAnYhOiAiMsQsiOnRdd8JxnHFFUbYURZlsNBpBIpG4EfWGCcgTkWtZ1ll/jHO+3u12twEcARgNgoAnk8kUAJWI/jZAVdWcYRgvn8c8z9uJRqND5XK5WalUZmOx2Ey73b6LRCKaruueqPtfkX+BRCKRfAAM043+Rp32BgAAAABJRU5ErkJggg==',
        tip: '区分大小写匹配',
    },
    {
        key: 'precise',
        imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAwFBMVEUAAAD///+AgICioqKSkpKcnJyUlJSbm5uVlZWXl5eWlpaWlpaYmJiZmZmWlpaVlZWVlZWWlpaVlZWYmJiWlpaYmJiWlpaXl5eYmJiXl5eXl5eWlpaYmJiYmJiXl5eYmJiYmJiWlpaXl5eXl5eWlpaWlpaXl5eWlpaWlpaYmJiXl5eXl5eYmJiYmJiXl5eYmJiXl5eWlpaXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eIXQHmAAAAP3RSTlMAAQILDhITFxggIi4vMjM1Oj9BQ0RISVFUXWBmam9zdHmBhIWGjZaXoaOkp6qvvL7EyMzR2t3g4eTn6erz+PmloSGXAAAAAWJLR0QB/wIt3gAAAJlJREFUOMtjYBgF1AUqdvYowE4ZTYEdK4QW1oPQbLZoCuyhNJ82mgCKAh1TRgwdyHw2M31BIMUtxo5DgayqpAYDg5yBsjknFgX2JgzGPMxWLAxcAuL6kpb2WEzgtzEyspZmUNOVMZDCaoW6PAODiCGDqSi/BXYFChwMDExKzEJaihJ8OLwJBLyaOLxpx0YgJJXR40JpNH2SBgAKqha54oD4rgAAAABJRU5ErkJggg==',
        tip: '精确匹配',
    },
    {
        key: 'front',
        imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB20lEQVRYhe2QPYgTURSFz33zJtkogrI6hcUqIm5pobiVVlsq6SwEmyQwZMCfThYRXiXYSZjMzdOwYVER0gsWay2ynYiFICgoGIw2oilm8q7NBpYVMkEN28xX3nM553CAgoKCgoIpMPPLOI4X55mhcvSjvu/v38sCc2emAsYY1ev1Fnbfmfk1M2/NtYCIlIMgeDYaja7tCj8HoCQii51O5/ROrd/ve0mSnLDWHv4fBZ4qpcae5/WSJDlkjNHbUo2INgA8EpHa5D+O42PD4fAtgA3n3CtmNv9UAMAZEbngnHtHRO+DILhnrd0H4DIRPVFKPQZwpdVqlQFAa30EwK0ois5rrVcB3JxmrqeJACAiz5VSZSK6GIbhLwBg5qsAlIjc3n5b8H2/CqCfZdlXz/PuMvNalmUZgAPT/HMXIKImgA8isrbjXCeiB865TefcJoB1IqoDgFLqDoCtZrO5QkQ38vxzF1BKuTAMa8YYBQDtdvukiJwtlUqX6vX6DwDodrsv0jT9ZK1dGo/Hb0TkOjMfFJHjANxU/7wCE4wxE6MvRLQ8CQeARqPx3Tm3XKlUvkVRdN/zvKpz7uFgMKhqrU/NmvEHzPzRWrv01wYzkLfA5zRNf86zQEFBQcGe8xvNVbTHyF7uqwAAAABJRU5ErkJggg==',
        tip: '头部匹配',
    },
    {
        key: 'tail',
        imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB9klEQVRYhe2UP4gTQRjF37fJJqcRDw0kEUTwDygIIgh2NoIoWFwjKU5QDIRjJhxoddptY32wxcyuWEi4QnK1eJ1a2HqNIAh3V6jkApcyISCzz0YhitmcSqz2B9PM+2bem2+GATIyMjIyZkwURctRFC1P0vOzDkCynKZ7sw4wjakBrLUPrLU0xlz4k43b7XZpP3X7uYIGyQ0RaQC4/0u4inPuQKVS+Vyv192P+TiOjw0Gg01jzM1pm6d2wFp7GcCc7/sawGIYhsUx7QmAt57nrfX7/c0wDA8DgDHmiHNuRHJFRDYAXPzrAAAaANrNZnMHwAff9xcAoNPpFEhulcvl81rrKyKy5/v+NWPMoohsfR+rAI4CWEgzkElCHMcHkyTpAngtIrskLwHYU0rdICnW2scicp3kVxE5CWBFKfVsrENLAB6RfCMiO0qp4Hc+E98AyVsAPpJcIwkReUXyaRzHJ4wxxz3Pu+153plut+uq1eq78bXGmFMAHpK8KiJ30jow8QpINkjGWut1rfW6Uuq5iLxIkuQugE8ADjnnbK1WeykiPx1Ea73d6/VOa62308xTO5DP5+/Nz89/GZ8bjUZLhUJhrtVq7YZheK5YLJ4dDofvc7mcXyqVRuO1QRAk08z/C9bawFobTNJn/hWLSH/WHhkZGRn/xDfA/cJ9mTtA3QAAAABJRU5ErkJggg==',
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
                <Space size={0} align="center">
                    {options.map((op) => (
                        <Tooltip key={op.key} title={op.tip} mouseEnterDelay={0.5}>
                            <img
                                className={classNames(
                                    'dtc-input-match-suffixItem',
                                    realSearchType === op.key &&
                                        'dtc-input-match-suffixItem__active'
                                )}
                                src={op.imgSrc}
                                alt={op.key}
                                onClick={() => handleTypeChange(op.key)}
                            />
                        </Tooltip>
                    ))}
                </Space>
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
