import React, { Component } from 'react';
import { Table, Pagination, Spin } from 'antd';
import { TableProps } from 'antd/es/table';
import { PaginationProps } from 'antd/es/pagination/Pagination';

interface IProps<T> extends TableProps<T>{
    pagination: PaginationProps|false;
    emptyText?: string;
    loading?: boolean;
}
interface IState {
    pagination: any;
    filters: any;
    sorter: any;
    extra: any;
}
class DtTable<T> extends Component<IProps<T>, IState> {
    constructor (props) {
        super(props);
        this.state = {
            pagination: props.pagination,
            filters: [],
            sorter: {},
            extra: {}
        }
    }

    onTableChange = (pagination, filters, sorter, extra) => {
        this.setState({
            filters,
            sorter,
            extra,
            pagination: Object.assign({}, this.state.pagination, {
                current: 1,
                total: 0
            })
        }, this.onChange)
    }

    onPaginationChange = (page, pageSize) => {
        this.setState({
            pagination: Object.assign({}, this.state.pagination, {
                current: page,
                pageSize
            })
        }, this.onChange)
    }

    onShowSizeChange = (current, size) => {
        this.setState({
            pagination: Object.assign({}, this.state.pagination, {
                current: 1,
                pageSize: size
            })
        }, this.onChange)
    }

    onChange = () => {
        const { pagination, filters, sorter, extra } = this.state;
        this.props.onChange(pagination, filters, sorter, extra)
    }

    render () {
        const { props } = this;
        const { emptyText, pagination, loading = false } = props;
        return (
            <div className="dt-table">
                <Spin spinning={loading}>
                    <div className="dt-table-box flexDirection" data-testid='test-table'>
                        <div className="dt-table-body flexAuto">
                            <Table {...props} loading={false} pagination={false} onChange={this.onTableChange}/>
                            {
                                emptyText ? <span className="dt-empty" data-testid='test-empty'>{emptyText}</span> : null
                            }
                        </div>
                        {
                            pagination && (
                                <div className="dt-table-footer">
                                    <Pagination {...pagination} size="small" data-testid='test-pagination' onChange={this.onPaginationChange} onShowSizeChange={this.onShowSizeChange}/>
                                </div>
                            )
                        }
                    </div>
                </Spin>
            </div>
        )
    }
}

export default DtTable
