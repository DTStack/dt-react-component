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
        const { clearValueRequest = false } = this.props;
        if (!clearValueRequest && !str) {
            this.setState({ dataSource: this.state.dataSource })
        } else {
            debounce(() => this.getDataSource(str), 800)();
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
        const { showSearch = true, filterLocal, servise, ...others } = this.props;
        const { dataSource, fetching } = this.state;
        console.log(dataSource)
        return (
            <Select
                showSearch={showSearch}
                style={{ minWidth: 300 }}
                filterOption={(input, option) => {
                    if (!filterLocal) {
                        return false;
                    }
                    return option.props.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                    option.props.value.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                }}
                onSearch={ servise && this.onSearch }
                notFoundContent={fetching ? <Spin size="small" /> : null}
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
