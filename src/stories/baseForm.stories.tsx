import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import BaseForm from './components/baseForm'
const stories = storiesOf('form和modal结合', module);
stories.addDecorator(withKnobs)

const propDefinitions = [
    {
        property: 'hideModelHandler',
        propType: 'Function',
        required: true,
        description: '控制模态框的显示影藏',
        defaultValue: '--'
    }, {
        property: 'onSubmit',
        propType: 'Function',
        required: true,
        description: '点击确定按钮后，表单的值验证无误后的回调，接受两个参数value:表单的值，record:其他想要提交的值',
        defaultValue: '--'
    }, {
        property: 'cancelText',
        propType: 'string',
        required: false,
        description: '模态框取消按钮的文本',
        defaultValue: '取消'
    }, {
        property: 'okText',
        propType: 'string',
        required: false,
        description: '模态框确定按钮的文本',
        defaultValue: '确定'
    }, {
        property: 'record',
        propType: 'string | number | object',
        required: false,
        description: '其他想要提交的参数',
        defaultValue: '--'
    }, {
        property: 'visible',
        propType: 'boolean',
        required: false,
        description: '模态框显示隐藏的状态',
        defaultValue: '--'
    }, {
        property: 'title',
        propType: 'React.ReactNode | string',
        required: false,
        description: '标题',
        defaultValue: '--'
    }, {
        property: 'onCancel',
        propType: 'Function',
        required: false,
        description: '点击取消的回调',
        defaultValue: '--'
    }, {
        property: 'width',
        propType: 'string | number',
        required: false,
        description: 'modal宽度',
        defaultValue: '--'
    }, {
        property: 'modelClass',
        propType: 'string',
        required: false,
        description: 'modal样式类名',
        defaultValue: '--'
    }, {
        property: 'FormComponent',
        propType: 'FormComponentProps',
        required: true,
        description: '传入模态框的表单元素',
        defaultValue: '--'
    }
]

stories.add('BaseForm', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>{` 当需要在模态框中收集用户的表单信息，可以在这个组件中传入自己想要的表单元素`}</p>
        <h2>示例</h2>
        <BaseForm />
    </div>
), {
    info: {
        text: `
            代码示例：
            ~~~js
            import { Form, Input } from 'antd';
            import { BaseForm } from 'dt-react-component'
            const Modal = BaseForm((props) => {
                const { form: { getFieldDecorator } } = props
                return (
                    <FormItem label='test-label'>
                        {getFieldDecorator('test', {
                            rules: [{ max: 10 }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                )
            })
            <Modal
                title='BaseForm'
                visible={this.state.visible}
                hideModelHandler={this.hideModelHandler}
                onSubmit={(value) => { console.log(value) }}
            />
            ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
