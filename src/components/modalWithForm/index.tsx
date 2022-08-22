import React, { Component } from 'react';
import { Modal, Form } from 'antd';
import { ButtonProps, ButtonType } from 'antd/lib/button';
export interface ModalProps {
    hideModelHandler: () => any;
    onSubmit?: (values: any, record: any) => void;
    cancelText?: string;
    okText?: string;
    okType?: ButtonType;
    record?: string | number | object;
    visible?: boolean;
    title?: React.ReactNode | string;
    onCancel?: (func: Function) => any;
    width?: string | number;
    modelClass?: string;
    footer?: string | React.ReactNode;
    centered?: boolean;
    cancelButtonProps?: ButtonProps;
    notSubmitCloseModal?: boolean;
}

function ModalWithForm (FormComponent: any) {
    return class ModalForm extends Component<ModalProps, any> {
        formRef: any = React.createRef();
        constructor (props: any) {
            super(props);
        }
        okHandler = () => {
            const { record, notSubmitCloseModal = false, onSubmit, hideModelHandler } = this.props;
            this.formRef.current?.validateFields().then((err: any, values: any) => {
                if (!err) {
                    onSubmit(values, record);
                    notSubmitCloseModal && hideModelHandler();
                }
            });
        };
        cancelHandler = () => {
            const { hideModelHandler } = this.props
            hideModelHandler()
            this.formRef.current?.resetFields();     
        }
        render () {
            const {
                title,
                visible,
                okText,
                cancelText,
                modelClass,
                okType,
                footer,
                centered,
                cancelButtonProps
            } = this.props;
            return (
                <>
                    <Modal
                        className={modelClass}
                        title={title}
                        visible={visible}
                        onOk={this.okHandler}
                        onCancel={this.cancelHandler}
                        okText={okText}
                        cancelText={cancelText}
                        okType={okType}
                        footer={footer}
                        centered={centered}
                        cancelButtonProps={cancelButtonProps}
                    >
                        <FormComponent {...this.props} ref={this.formRef}/>
                    </Modal>
                </>
            )
        }
    }
}
export default ModalWithForm;
