import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import GoBack from '../components/go-back';

const stories = storiesOf('goback', module);
stories.addDecorator(withKnobs)

const propDefinitions = [{
    property: 'url',
    propType: 'string',
    required: false,
    description: '返回的路由， 如不传参数，则默认返回浏览器上一级url',
    defaultValue: ''
}]
stories.add('返回', () => (
    <div className='story_wrapper'>
        <section>返回组件</section>
        <p>默认返回浏览器上一级路由</p>
        <GoBack />
    </div>
), {
    info: {
        inline: true,
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
        #### 使用示例
        ~~~js
        <GoBack url='/api/manage' />
        ~~~
      `
    }
})
