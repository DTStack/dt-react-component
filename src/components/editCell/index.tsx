import * as React from 'react';
import { Input } from 'antd';
import EllipsisText from '../ellipsisText';

interface PropsInterface {
    value: string;
    keyField: string;
    isView?: boolean;
    onHandleEdit: Function;
}
interface StateInterface {
    isEdit: boolean;
    editValue: string | number | string[];
}

export default class EditCell extends React.PureComponent<PropsInterface, StateInterface> {
    state = {
        isEdit: false,
        editValue: ''
    }

    componentDidMount () {
        const { value } = this.props;
        this.setState({ editValue: value })
    }

    onEdit = () => this.setState({ isEdit: true });

    onChangeEdit = (e: any) => {
        const value = e.target.value;
        this.setState({
            editValue: value ? value.slice(0, 20) : ''
        });
    }

    onOkEdit = () => {
        const { editValue } = this.state;
        const { keyField } = this.props;
        this.props.onHandleEdit(keyField, editValue);
        this.onCancelEdit();
    }

    onCancelEdit = () => this.setState({ isEdit: false });

    render () {
        const { isEdit, editValue } = this.state;
        const { isView } = this.props;
        return (
            <div className="dtc-edit-Cell">
                {isEdit ? (
                    <div className="dtc-edit-input-row">
                        <Input
                            value={editValue}
                            style={{ width: 150, lineHeight: 24, height: 24 }}
                            onChange={this.onChangeEdit}
                        />
                        <a onClick={this.onOkEdit}>完成</a>
                        <a onClick={this.onCancelEdit}>取消</a>
                    </div>
                ) : (
                    <>
                        <EllipsisText value={editValue} />
                        {
                            !isView && <a onClick={this.onEdit}>修改</a>
                        }
                    </>
                )}
            </div>
        );
    }
}
