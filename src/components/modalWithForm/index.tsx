import React, { Component } from 'react';
import { Modal, Form } from 'antd';
import { ButtonProps, ButtonType } from 'antd/lib/button';
import type { FormInstance } from 'antd/es/form';

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

interface ModalState {
    form: null | FormInstance;
}

function ModalWithForm(FormComponent: any) {
    return class ModalForm extends Component<ModalProps, ModalState> {
        formRef: any = React.createRef();
        constructor(props: any) {
            super(props);
            this.state = {
                form: null
            };
        }
        componentDidMount(): void {
            this.setState({
                form: this.formRef.current
            });
        }
        okHandler = async () => {
            const { record, notSubmitCloseModal = false, onSubmit, hideModelHandler } = this.props;
            try {
                const values = await this.formRef.current?.validateFields()
                onSubmit(values, record);
                notSubmitCloseModal && hideModelHandler();
            } catch (error) {}
        };
        cancelHandler = () => {
            const { hideModelHandler } = this.props;
            hideModelHandler();
            this.formRef.current?.resetFields();
        };
        render() {
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
            const { form } = this.state;
            return (
                <Form ref={this.formRef}>
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
                        {form && <FormComponent {...this.props} />}
                    </Modal>
                </Form>
            );
        }
    };
}
export default ModalWithForm;
