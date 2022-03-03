import React, { Component } from 'react'
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Button } from 'antd';
import RenderBaseForm from '../../../components/modalWithForm'

const FormItem = Form.Item;

const Modal = RenderBaseForm((props) => {
    const { form: { getFieldDecorator } } = props
    return (
        <FormItem label='username'>
            {getFieldDecorator('username', {
                rules: [{ max: 10 }]
            })(
                <Input />
            )}
        </FormItem>
    )
})

export default class ModalWithForm extends Component<any, any> {
    constructor (props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    hideModelHandler = () => {
        const { visible } = this.state
        this.setState({ visible: !visible });
    }
    render () {
        return (
            <>
                <Button onClick={this.hideModelHandler}>click</Button>
                <Modal
                    title='ModalWithForm'
                    visible={this.state.visible}
                    hideModelHandler={this.hideModelHandler}
                    onSubmit={(value) => { console.log(value) }}
                />
            </>
        )
    }
}
