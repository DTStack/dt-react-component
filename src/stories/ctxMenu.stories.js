import React from 'react';
import { Button } from 'antd';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs } from '@storybook/addon-knobs';
import CtxMenu from '../components/ctx-menu';

const stories = storiesOf('CtxMenu', module);
// stories.addDecorator(story => <div style={{ textAlign: 'center', marginTop: '100px' }}>{story()}</div>)
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

// 定制化component props
const propDefinitions = [{
    property: 'children',
    propType: 'ReactNode',
    required: false,
    description: '子节点',
    defaultValue: ''
}, {
    property: 'operations',
    propType: 'Array',
    required: false,
    description: '传入的右键菜单内容，',
    defaultValue: ''
}, {
    property: 'id',
    propType: 'string || number',
    required: false,
    description: '循环用于拼装每个li的key',
    defaultValue: ''
}]
const Red = props => <span style={{ color: 'red' }} {...props} />;

const TableComponent = () => {
    const props = propDefinitions.map(
        ({ property, propType, required, description, defaultValue }) => {
            return (
                <tr key={property}>
                    <td>
                        {property}
                        {required ? <Red>*</Red> : null}
                    </td>
                    <td>{description}</td>
                    <td>{propType}</td>
                    <td>{defaultValue}</td>
                </tr>
            );
        }
    );

    return (
        <table width="90%">
            <thead>
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody>{props}</tbody>
        </table>
    );
};
stories.add('CtxMenu', () => (
    <div className='story_wrapper'>
        <section>右键菜单</section>
        <p>右键菜单</p>
        <CtxMenu
            operations={
                [{
                    txt: '移动',
                    cb: action('move')
                }, {
                    txt: '删除',
                    cb: action('del')
                }]
            }>
            <Button>右击我试试看~</Button>
        </CtxMenu>
    </div>
), {
    info: {
        inline: true,
        TableComponent,
        propTablesExclude: [Button],
        text: `
        #### 使用示例
        ~~~js
        <CtxMenu
            operations={
                [{
                txt: '移动',
                cb: () => {
                    action('move')
                }
            }, {
                txt: '删除',
                cb: () => {
                    action('del')
                }
            }]
        }>
            <Button>右击我试试看</Button>
        </CtxMenu>
        ~~~
      `
    }
})
