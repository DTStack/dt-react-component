import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';
import { State, Store } from '@sambego/storybook-state';
import { text, object } from '@storybook/addon-knobs';
import SlidePane from '../components/slidePane';

const store = new Store({
    visible: false
});

// 定制化component props
const propDefinitions = [{
    property: 'visible',
    propType: 'boolean',
    required: true,
    description: 'slidepanel是否可见',
    defaultValue: 'false'
}, {
    property: 'children',
    propType: 'ReactNode',
    required: false,
    description: 'slidepanel内容',
    defaultValue: ''
}, {
    property: 'className',
    propType: 'string',
    required: false,
    description: '类名',
    defaultValue: ''
}, {
    property: 'onClose',
    propType: 'function',
    required: false,
    description: '点击slidepanel回调',
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

const stories = storiesOf('slidePane', module);
stories.add('slidepanel', () => {
    const groupId = 'slidepanel'
    const defaultStyle = {
        right: '-20px',
        width: '80%',
        minHeight: '600px',
        height: '100%'
    }
    const style = object('style', defaultStyle, groupId);
    const defayltText = 'hello slidePanel'
    const children = text('children', defayltText, groupId)
    // const visible = boolean('visible', store.get("visible"), groupId)
    return (
        <div className='story_wrapper'>
            <section>
                slidepanel面板组件作用于右侧展示更多信息
            </section>
            <Button onClick={() => {
                action(store.get('visible'))
                store.set({
                    visible: !store.get('visible')
                })
            }}>click me</Button>
            <section>
                在knobs栏调试slidePanel组件
            </section>
            <State store={store}>
                <SlidePane
                    visible={store.get('visible')}
                    style={style}
                    onClose={() => {
                        action('我该关闭啦')
                        store.set({
                            visible: false
                        })
                    }}
                >
                    <div>{children}</div>
                </SlidePane>
            </State>
        </div>
    )
}, {
    info: {
        text: `
        #### 使用示例
        ~~~js
        <SlidePane
            className="m-tabs"
            visible={this.props.visible}
            style={style}
            onClose={this.props.onClose}
        />
        ~~~
        `,
        TableComponent,
        propTablesExclude: [Button, State]
    }
})
