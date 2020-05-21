import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ChromeDownload from '../components/chromeDownload';
const stories = storiesOf('ChromeDownload', module)

stories.add('chromeDownload', () => {
    return <p className='story_wrapper'>
        <p>引导用户使用chrome访问产品页面</p>
        <ChromeDownload />
    </p>
}, {
    info: {
        // TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            #### 使用示例
            直接引用即可
            ~~~js
            <ChromeDownload />
            ~~~
        `
    }
})
