import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import { FormItem } from './components/formComponent'

const stories = storiesOf('FormItem 表单元素', module);
stories.addDecorator(withKnobs)

const propDefinitions = [
    {
        property: 'item',
        propType: 'object',
        required: true,
        description: (<div className="strory-dt_easy_select_divDesc">
            <p>描述表单的一些属性。具体如下 :</p>
            <p>1、label：标签的文本，可选属性</p>
            <p>2、key：表示元素的唯一性，也用于获取表单的值。必选属性</p>
            <p>3、require：表单的校验，可选属性</p>
            <p>4、component：表单包裹的组件，可选属性，默认是input组件</p>
            <p>5、options：自定义属性，比如可选className自定义样式，validateFirst当某一规则校验不通过时，是否停止剩下的规则的校验，validateTrigger设置字段校验的时机，valuePropName子节点的值的属性，normalize转换默认的 value 给控件，<a href='https://codepen.io/afc163/pen/JJVXzG?editors=001'>一个选择全部的例子</a></p>
            <p>6、rules：表单校验规则，可选属性，默认会提示message</p>
            <p>7、initialValue：设置子元素默认值</p>
        </div>),
        defaultValue: '--'
    }, {
        property: 'layout',
        propType: 'object',
        required: false,
        description: '控制表单的布局样式',
        defaultValue: '--'
    }, {
        property: 'getFieldDecorator',
        propType: 'Function',
        required: true,
        description: (<div className="strory-dt_easy_select_divDesc">
            和表单进行双向绑定，使用Form.create(options)包裹的组件，会从this.props.form自动获得的属性
        </div>),
        defaultValue: '--'
    }
]

const IProps = {
    item: {
        label: 'input',
        key: 'input'
    }
}

stories.add('FormItem', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>{` 当用户需要进行一些表单提交信息时使用，也可以配合封装的BaseForm组件，在模态框中收集用户提交的信息`}</p>
        <h2>示例</h2>
        <div style={{ width: '300px' }}>
            <FormItem {...IProps} />
        </div>
    </div >
), {
    info: {
        inline: true,
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            代码示例：
            ~~~js
            import { Form } from 'antd';
            import RenderFormItem from 'dt-react-component'
            const App = (props) => {
                const { getFieldDecorator } = props.form;
                const params = { ...props, getFieldDecorator }
                return (
                    <Form>
                        {RenderFormItem(params)}
                    </Form>
                )
            }
            export const FormItem: any = Form.create()(App);
            ~~~
        `
    }
})
