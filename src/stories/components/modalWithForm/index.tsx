import React, { Component } from 'react';
import { Input, Button, Form } from 'antd';
import RenderBaseForm from '../../../components/modalWithForm';

const FormItem = Form.Item;

const Modal = RenderBaseForm((props) => {
    return (
        <FormItem label="username" name={'username'} rules={[{ max: 10 }]}>
            <Input />
        </FormItem>
    );
});

export default class ModalWithForm extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    hideModalHandler = () => {
        const { visible } = this.state;
        this.setState({ visible: !visible });
    };
    render() {
        return (
            <>
                <Button onClick={this.hideModalHandler}>click</Button>
                <Modal
                    title="ModalWithForm"
                    visible={this.state.visible}
                    hideModalHandler={this.hideModalHandler}
                    onSubmit={(value) => {
                        console.log(value);
                    }}
                />
            </>
        );
    }
}
