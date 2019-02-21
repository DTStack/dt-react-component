import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/button';

storiesOf('Button', module)
    .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>) // 当前组件加载装饰器
    .add('基本用法', () => {
        return <Button onClick={action('clicked')}>按钮</Button>
    })
    .add('测试', () => (
        <Button>test</Button>
    ))