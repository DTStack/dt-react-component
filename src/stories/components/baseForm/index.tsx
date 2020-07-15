import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import RenderBaseForm from '../../../components/baseForm'

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
export default class BaseForm extends Component<any, any> {
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
                    title='BaseForm'
                    visible={this.state.visible}
                    hideModelHandler={this.hideModelHandler}
                    onSubmit={(value) => { console.log(value) }}
                />
            </>
        )
    }
}