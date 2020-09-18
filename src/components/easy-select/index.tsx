import * as React from 'react';
import { Select } from 'antd';
import debounce from 'lodash/debounce';

const { Option } = Select;
class EasySelect extends React.Component<any, any> {

    state = {
        dataSource: [],
        str: '',
        scrollPage: 1,
        allData: []
    };

    componentDidMount = () => {
        const { autoValue = '', dataSource = [] } = this.props;
        if (dataSource.length > 0) {
            this.lazyDataSource(dataSource)
        } else {
            this.getDataSource(autoValue);
        }
    }

    onSearch = (str: any) => {
        const { clearValueRequest = false, autoValue } = this.props;
        if (!clearValueRequest && !str) {
            // 默认清空展示上次的数据
            this.setState({ dataSource: this.state.dataSource })
        } else if (clearValueRequest && !str) {
            // 此时清空展示最初的数据, 进行初始化的请求，参数传入autoValue
            this.getDataSource(autoValue);
        } else {
            // 正常搜索函数，特殊处理防抖
            debounce(() => this.getDataSource(str), 300)();
        }
    };

    lazyDataSource = (data: any) => {
        const { scrollPage = 1 } = this.state;
        const { isLazy = true } = this.props;
        if (data.length > (scrollPage * 100) && isLazy) {
            this.setState({
                dataSource: data.slice(0, scrollPage * 100) || [],
                allData: data
            })
        } else {
            this.setState({
                dataSource: data || []
            })
        }
    }

    getDataSource = async (str: any) => {
        const { servise } = this.props;
        if (servise) {
            await servise(str).then((res: any) => {
                this.setState({
                    str
                }, () => {
                    this.lazyDataSource(res)
                })
            })
        } else {
            const { allData } = this.state;
            this.lazyDataSource(allData)
        }
    }
    companyScroll = (e: { persist?: any; target?: any; }) => {
        e.persist();
        const { target } = e;
        const { str, scrollPage, allData } = this.state;
        if (target.scrollTop + target.offsetHeight === target.scrollHeight && allData.length > 0) {
            const nextScrollPage = scrollPage + 1;
            this.setState({ scrollPage: nextScrollPage },() => this.getDataSource(str));
        }
    };
    render () {
        const { allowClear = true, showSearch = true, filterLocal, servise, ...others } = this.props;
        const { dataSource } = this.state;
        return (
            <Select
                allowClear={allowClear} // 默认支持清除
                showSearch={showSearch} // 默认支持查询
                style={{ minWidth: 120 }} // todo: 暂时样式，有待商榷
                onSearch={ servise && !filterLocal ? this.onSearch : null }
                filterOption={ !filterLocal ? null : (input: any, option: any) =>
                    // 兼容数字和字符串等模糊查询
                    option.props.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                    option.props.value.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onPopupScroll={this.companyScroll}
                { ...others }
            >
                {dataSource &&
                    dataSource.map((item: any) => {
                        return (
                            <Option key={item.value || item} value={item.value || item}>
                                {item.label || item}
                            </Option>
                        );
                    })}
            </Select>
        );
    }
}
export default EasySelect;
