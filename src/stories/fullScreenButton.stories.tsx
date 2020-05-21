import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FullScreenButton from '../components/fullscreen';
const stories = storiesOf('FullScreenButton', module)

stories.add('FullScreenButton', () => {
    return <p className='story_wrapper'>
        <p>页面全屏</p>
        <FullScreenButton />
    </p>
}, {
    info: {
        // TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            #### 使用示例
            直接引用即可
            ~~~js
            <FullScreenButton />
            ~~~
        `
    }
})
