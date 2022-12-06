import React from 'react';
import { Input } from 'antd';
import EllipsisText from '../ellipsisText';
import classNames from 'classnames';
import './style.scss';

type EditType = string | number;
export interface EditCellProps {
    className?: string;
    value: string;
    keyField: string;
    isView?: boolean;
    onHandleEdit: (keyField: string, editValue: EditType) => void;
}
export interface EditCellStates {
    isEdit: boolean;
    editValue: EditType;
}

export default class EditCell extends React.PureComponent<EditCellProps, EditCellStates> {
    state: EditCellStates = {
        isEdit: false,
        editValue: '',
    };

    componentDidMount() {
        const { value } = this.props;
        this.setState({ editValue: value });
    }

    onEdit = () => this.setState({ isEdit: true });

    onChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        this.setState({
            editValue: value ? value.slice(0, 20) : '',
        });
    };

    onOkEdit = () => {
        const { editValue } = this.state;
        const { keyField } = this.props;
        this.props.onHandleEdit(keyField, editValue);
        this.onCancelEdit();
    };

    onCancelEdit = () => this.setState({ isEdit: false });

    render() {
        const { isEdit, editValue } = this.state;
        const { isView, className = '' } = this.props;
        return (
            <div className={classNames('dtc-edit-Cell', className)}>
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
                        <EllipsisText value={editValue} maxWidth={120} />
                        {!isView && <a onClick={this.onEdit}>修改</a>}
                    </>
                )}
            </div>
        );
    }
}
