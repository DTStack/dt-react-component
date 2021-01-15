import React from 'react'

import { Modal, AutoComplete, Input, Row, Col, Select } from 'antd';

const Option = Select.Option;
const TASK_STATUS = {
    TASKDESC: 1,
    TASKNAME: 2
}
export interface SearchModalProps {
    visible: boolean;
    name?: 'notebook';
    title?: string;
    onChange?: (value: string, callback: Function, search?: typeof TASK_STATUS) => void;
    onSelect?: (value: string) => void;
    onCancel?: () => void;
    [propName: string]: any;
}
class SearchModal extends React.Component<SearchModalProps, any> {
    state: any = {
        data: [],
        search: TASK_STATUS.TASKNAME
    }
    onCancel = () => {
        this.props.onCancel();
    }
    onChange = (value: any) => {
        const { onChange } = this.props;
        const { search } = this.state;
        if (onChange) {
            onChange(value, this.changeValue, search)
        }
    }
    searchTask (value: number) {
        this.setState({ search: value })
    }
    onSelect = (value: any) => {
        this.props.onSelect(value);
    }
    changeValue = (values: any) => {
        this.setState({
            data: values
        })
    }
    render () {
        const { data, search } = this.state;
        const { visible, title, name } = this.props;
        return (
            <Modal
                visible={visible}
                onCancel={this.onCancel}
                footer={null}
                title={title || '搜索并打开'}
            >
                <Row align="middle" justify="center" type="flex">
                    { name === 'notebook' && (
                        <Col span={6} >
                            <Select style={{ width: '100%', marginTop: '4px' }} value={search} onChange={this.searchTask.bind(this)}>
                                <Option value={TASK_STATUS.TASKNAME}>任务名称</Option>
                                <Option value={TASK_STATUS.TASKDESC}>任务描述</Option>
                            </Select>
                        </Col>)
                    }
                    <Col span={name === 'notebook' ? 18 : 24}>
                        <AutoComplete
                            dataSource={data}
                            style={{ width: '100%', height: '28px', margin: '8px 0' }}
                            onSelect={this.onSelect}
                            onSearch={this.onChange}
                        >
                            <Input.Search style={{ marginLeft: '8px' }}/>
                        </AutoComplete>
                    </Col>
                </Row>
            </Modal>
        )
    }
}
export default SearchModal;
