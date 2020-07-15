import React, { Component } from 'react';
import { Modal, Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form'
import './style.scss';

export interface ModalProps {
    hideModelHandler: () => any;
    onSubmit: (values: any, record: any) => void;
    cancelText?: string;
    okText?: string;
    record?: string | number | object;
    visible?: boolean;
    title?: React.ReactNode | string;
    onCancel?: (func: Function) => any;
    width?: string | number;
    modelClass?: string;
}

function BaseForm (FormComponent: any) {
    class ModalForm extends Component<ModalProps & FormComponentProps, any> {
        constructor (props: any) {
            super(props);
        }
        okHandler = () => {
            const { record, onSubmit, hideModelHandler } = this.props;
            this.props.form.validateFields((err: any, values: any) => {
                if (!err) {
                    onSubmit(values, record);
                    hideModelHandler();
                }
            });
        };
        render () {
            const { form, title, visible, okText, cancelText, hideModelHandler, modelClass } = this.props;
            return (
                <>
                    <Modal
                        className={modelClass}
                        title={title}
                        visible={visible}
                        onOk={this.okHandler}
                        onCancel={hideModelHandler}
                        okText={okText}
                        cancelText={cancelText}
                    >
                        <FormComponent form={form} {...this.props} />
                    </Modal>
                </>
            )
        }
    }
    return Form.create<any>({})(ModalForm);
}
export default BaseForm;
