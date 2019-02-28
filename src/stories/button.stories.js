import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, actions, configureActions , decorate } from '@storybook/addon-actions';
import { Button } from '../components/button';

const events = actions({
    onClick: 'clicked',
    onMouseOver: 'hovered'
})
// const firstArg = decorate([args => args.slice(0, 1)]);
storiesOf('Button', module)
    .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>) // 当前组件加载装饰器
    .add('基本用法', () => (
            <Button {...events}>123</Button>
    ))
    .add('测试', () => (
        <Button onClick={action('test')}>test</Button>
    ))