import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PropsTable } from './components/propsTable';
import '../styles/index.scss';
const stories = storiesOf('Cookies 监听 Cookie 变更', module);
/**
 * TODO
 * Cookies 非 UI 类组件 无 DOM 元素
 * info Addons 无法检测，propDefinitions失效
 * 暂时通过 text markdown 形式展示
 */
const propDefinitions = [{
    property: 'watchFields',
    propType: 'Array',
    required: false,
    description: '监听的一组cookie',
    defaultValue: '-'
}, {
    property: 'onFieldsChanged',
    propType: 'function(fields)',
    required: false,
    description: 'cookies 变更触发函数，fields为当前cookies变更值',
    defaultValue: '-'
}]
stories.add('cookies', () => {
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>监听页面 Cookie 信息变更</p>
            <h2>示例</h2>
            {/* <Cookies watchFields={[ // 当页面cookie如下字段的值发生变更时会触发页面刷新
                'dt_token', 'dt_tenant_id', 'dt_user_id', 'project_id'
            ]} onFieldsChanged={() => {}}>
            </Cookies> */}
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import { Cookies } from 'dt-react-component'
        <Cookies
            watchFields={[ // 当页面cookie如下字段的值发生变更时会触发页面刷新
                'dt_token', 'dt_tenant_id', 'dt_user_id', 'project_id'
            ]}
            onFieldsChanged={this.onFieldsChanged}
        />
        ~~~
        ### Api
        参数 | 说明 | 类型 | 默认值
        -|-|-|-
        watchFields | 监听的一组cookie | Array | -
        onFieldsChanged | cookies 变更触发函数，fields为当前cookies变更值 | function(fields) | -
        `
    },
    TableComponent: () => PropsTable({ propDefinitions })
})
