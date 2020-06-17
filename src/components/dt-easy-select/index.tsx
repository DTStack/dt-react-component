import * as React from 'react';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';

const { Option } = Select;
class DtEasySelect extends React.Component<any, any> {
    constructor (props: any) {
        super(props);
        const { dataSource = [] } = this.props;
        this.state = {
            dataSource,
            fetching: false
        };
    }

    componentDidMount = () => {
        const { autoValue = '' } = this.props;
        this.getDataSource(autoValue);
    }

    onSearch = (str: any) => {
        const { clearValueRequest = false, autoValue } = this.props;
        if (!clearValueRequest && !str) { // 默认清空展示上次的数据
            this.setState({ dataSource: this.state.dataSource })
        } else if (clearValueRequest && !str) { // 此时清空展示最初的数据, 进行初始化的请求，参数传入autoValue
            this.getDataSource(autoValue);
        } else { // 正常搜索函数，特殊处理防抖
            debounce(() => this.getDataSource(str), 300)();
        }
    }

    getDataSource = async (str: any) => {
        const { servise } = this.props;
        this.setState({
            fetching: true
        })
        servise && await servise(str).then((res: any) => {
            this.setState({
                dataSource: res || [],
                fetching: false
            })
        })
    }
    render () {
        const { allowClear = true, showSearch = true, filterLocal, servise, ...others } = this.props;
        const { dataSource, fetching } = this.state;
        return (
            <Select
                allowClear={allowClear} // 默认支持清除
                showSearch={showSearch} // 默认支持查询
                style={{ width: '100%' }} // todo: 暂时样式，有待商榷
                onSearch={ servise && this.onSearch }
                notFoundContent={fetching ? <Spin size="small" /> : null}
                filterOption={ !filterLocal ? null : (input, option) =>
                    // 兼容数字和字符串等模糊查询
                    option.props.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                    option.props.value.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                { ...others }
            >
                {
                    dataSource && dataSource.map((item: any) => {
                        return (
                            <Option
                                key={ item.value || item }
                                value={ item.value || item }
                            >
                                { item.label || item }
                            </Option>
                        )
                    })
                }
            </Select>
        )
    }
}
export default DtEasySelect;
