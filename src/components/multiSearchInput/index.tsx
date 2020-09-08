import _ from 'lodash'
import { Input, Tooltip } from 'antd'
import * as React from 'react'

const searchTypeList: any = [
    {
        key: 'caseSensitive',
        imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABhElEQVRYhe2VPUvDQByHf5cmrRolQyHtYJ18gy4O4qSDg64i2II4SAvFNoWgX8ShQ64RBxFd6hdwc1QXQRCEirgo7WAXhxJJ079LC+LiRQWH3jPey8PD3cEBEolEMugw0YWc8zqAqRDuh1KpNB0+adAQvoI+nPM9APuMsblisXj72wD1B3vyRHQOIAdg90ucGQTBsGmaz9lsNhCRhToBzvkCgFNVVVc7nc617/sp27bfe3MHAJaJqMkYM3zfX7Rt++07pxImAEAewHGhUHgCcK9p2hoA1Gq1KBE9xuPxtGVZS4yxV03TVkSEwgGu644A2AQwX61WXQB6LwiZTMYHYLRarUvHca6IKA1gTMQr/AaIaANAnYhOiAiMsQsiOnRdd8JxnHFFUbYURZlsNBpBIpG4EfWGCcgTkWtZ1ll/jHO+3u12twEcARgNgoAnk8kUAJWI/jZAVdWcYRgvn8c8z9uJRqND5XK5WalUZmOx2Ey73b6LRCKaruueqPtfkX+BRCKRfAAM043+Rp32BgAAAABJRU5ErkJggg==',
        tip: '区分大小写匹配'
    },
    {
        key: 'precise',
        imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAwFBMVEUAAAD///+AgICioqKSkpKcnJyUlJSbm5uVlZWXl5eWlpaWlpaYmJiZmZmWlpaVlZWVlZWWlpaVlZWYmJiWlpaYmJiWlpaXl5eYmJiXl5eXl5eWlpaYmJiYmJiXl5eYmJiYmJiWlpaXl5eXl5eWlpaWlpaXl5eWlpaWlpaYmJiXl5eXl5eYmJiYmJiXl5eYmJiXl5eWlpaXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eIXQHmAAAAP3RSTlMAAQILDhITFxggIi4vMjM1Oj9BQ0RISVFUXWBmam9zdHmBhIWGjZaXoaOkp6qvvL7EyMzR2t3g4eTn6erz+PmloSGXAAAAAWJLR0QB/wIt3gAAAJlJREFUOMtjYBgF1AUqdvYowE4ZTYEdK4QW1oPQbLZoCuyhNJ82mgCKAh1TRgwdyHw2M31BIMUtxo5DgayqpAYDg5yBsjknFgX2JgzGPMxWLAxcAuL6kpb2WEzgtzEyspZmUNOVMZDCaoW6PAODiCGDqSi/BXYFChwMDExKzEJaihJ8OLwJBLyaOLxpx0YgJJXR40JpNH2SBgAKqha54oD4rgAAAABJRU5ErkJggg==',
        tip: '精确匹配'
    },
    {
        key: 'front',
        imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB20lEQVRYhe2QPYgTURSFz33zJtkogrI6hcUqIm5pobiVVlsq6SwEmyQwZMCfThYRXiXYSZjMzdOwYVER0gsWay2ynYiFICgoGIw2oilm8q7NBpYVMkEN28xX3nM553CAgoKCgoIpMPPLOI4X55mhcvSjvu/v38sCc2emAsYY1ev1Fnbfmfk1M2/NtYCIlIMgeDYaja7tCj8HoCQii51O5/ROrd/ve0mSnLDWHv4fBZ4qpcae5/WSJDlkjNHbUo2INgA8EpHa5D+O42PD4fAtgA3n3CtmNv9UAMAZEbngnHtHRO+DILhnrd0H4DIRPVFKPQZwpdVqlQFAa30EwK0ois5rrVcB3JxmrqeJACAiz5VSZSK6GIbhLwBg5qsAlIjc3n5b8H2/CqCfZdlXz/PuMvNalmUZgAPT/HMXIKImgA8isrbjXCeiB865TefcJoB1IqoDgFLqDoCtZrO5QkQ38vxzF1BKuTAMa8YYBQDtdvukiJwtlUqX6vX6DwDodrsv0jT9ZK1dGo/Hb0TkOjMfFJHjANxU/7wCE4wxE6MvRLQ8CQeARqPx3Tm3XKlUvkVRdN/zvKpz7uFgMKhqrU/NmvEHzPzRWrv01wYzkLfA5zRNf86zQEFBQcGe8xvNVbTHyF7uqwAAAABJRU5ErkJggg==',
        tip: '头部匹配'
    },
    {
        key: 'tail',
        imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB9klEQVRYhe2UP4gTQRjF37fJJqcRDw0kEUTwDygIIgh2NoIoWFwjKU5QDIRjJhxoddptY32wxcyuWEi4QnK1eJ1a2HqNIAh3V6jkApcyISCzz0YhitmcSqz2B9PM+2bem2+GATIyMjIyZkwURctRFC1P0vOzDkCynKZ7sw4wjakBrLUPrLU0xlz4k43b7XZpP3X7uYIGyQ0RaQC4/0u4inPuQKVS+Vyv192P+TiOjw0Gg01jzM1pm6d2wFp7GcCc7/sawGIYhsUx7QmAt57nrfX7/c0wDA8DgDHmiHNuRHJFRDYAXPzrAAAaANrNZnMHwAff9xcAoNPpFEhulcvl81rrKyKy5/v+NWPMoohsfR+rAI4CWEgzkElCHMcHkyTpAngtIrskLwHYU0rdICnW2scicp3kVxE5CWBFKfVsrENLAB6RfCMiO0qp4Hc+E98AyVsAPpJcIwkReUXyaRzHJ4wxxz3Pu+153plut+uq1eq78bXGmFMAHpK8KiJ30jow8QpINkjGWut1rfW6Uuq5iLxIkuQugE8ADjnnbK1WeykiPx1Ea73d6/VOa62308xTO5DP5+/Nz89/GZ8bjUZLhUJhrtVq7YZheK5YLJ4dDofvc7mcXyqVRuO1QRAk08z/C9bawFobTNJn/hWLSH/WHhkZGRn/xDfA/cJ9mTtA3QAAAABJRU5ErkJggg==',
        tip: '尾部匹配'
    }
]

export interface MultiSearchInputProps {
    placeholder: string;
    style: object;
    value: any; // input框的值
    onChange: any;
    onSearch: any;
    onTypeChange: any;
    searchType: string; // input框中选中的筛选方式
    filterOptions?: any[]; // 数组
    [propName: string]: any;
}

class MultiSearchInput extends React.Component<MultiSearchInputProps, any> {
    constructor (props: any) {
        super(props);
        this.state = {
            placeholder: this.props.placeholder || '',
            style: this.props.style || {},
            value: this.props.value || '',
            onChange: this.props.onChange || ((value: any) => { console.log(value) }),
            onSearch: this.props.onSearch || ((value: any, searchType: any) => { console.log(value, searchType) }),
            onTypeChange: this.props.onTypeChange || ((searchType: any) => { console.log(searchType) }),
            searchType: this.props.searchType || 'fuzzy',
            filterOptions: this.props.filterOptions || ['precise', 'front', 'tail']
        }
    }

    render () {
        const {
            placeholder,
            style,
            value,
            onChange,
            onSearch,
            onTypeChange,
            filterOptions
        } = this.state;
        let searchType = this.state.searchType;
        const propsValue = this.props.value;
        searchType = this.props.searchType != null ? this.props.searchType : searchType;
        const filterList = _.filter(searchTypeList, (item: any) => {
            return _.includes(filterOptions, item.key)
        });
        return (
            <div
                style={{
                    position: 'relative',
                    width: '250px'
                }}
            >
                <Input
                    value={propsValue != null ? propsValue : value}
                    placeholder={placeholder}
                    style={{
                        ...style,
                        paddingRight: `${filterOptions.length * 26 + 5}px`
                    }}
                    onChange={(e: any) => {
                        this.setState({ value: e.target.value });
                        onChange(e.target.value);
                    }}
                    onPressEnter={(e: any) => {
                        onSearch(e.target.value, searchType);
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        height: '100%',
                        top: '0px',
                        right: '0px',
                        width: `${filterOptions.length * 26 + 5}px`,
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingRight: '5px'
                    }}
                >
                    {
                        _.map(filterList, (item: any) => {
                            return (
                                <div
                                    style={{
                                        cursor: 'pointer',
                                        display: 'block',
                                        height: '22px',
                                        width: '26px',
                                        border: searchType === item.key ? '1px solid #2491F7' : 'none',
                                        overflow: 'hidden'
                                    }}
                                    onClick={() => {
                                        const newSearchType = searchType === item.key ? 'fuzzy' : item.key
                                        this.setState({
                                            searchType: newSearchType
                                        });
                                        onTypeChange(newSearchType)
                                    }}
                                >
                                    <Tooltip
                                        title={item.tip}
                                        mouseEnterDelay={0.5}
                                    >
                                        <img
                                            src={item.imgSrc}
                                            style={{
                                                marginTop: '-6px',
                                                marginLeft: '-3px'
                                            }}
                                        />
                                    </Tooltip>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default MultiSearchInput
