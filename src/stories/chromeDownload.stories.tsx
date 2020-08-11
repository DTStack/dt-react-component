import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ChromeDownload from '../components/chromeDownload';
import { PropsTable } from './components/propsTable';
import '../styles/index.scss';
const stories = storiesOf('ChromeDownload 下载页', module);
const propDefinitions = [{
    property: 'downloadChrome',
    propType: 'function',
    required: true,
    description: 'chrome 下载地址',
    defaultValue: '-'
}]
stories.add('chromeDownload', () => {
    const chromeAddRes = {
        macChrome: 'https://dl.google.com/chrome/mac/stable/GGRO/googlechrome.dmg', // mac版本Chrome下载地址
        windowsChrome: 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B8A1ECDAD-CD48-3F61-7773-5D75AC6B409A%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26brand%3DCHBD%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe' // windows版本chrome下载地址
    }
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>引导用户使用 Chrome 浏览器</p>
            <h2>示例</h2>
            <ChromeDownload downloadChrome={(os: 'macChrome' | 'windowsChrome') => {
                window.open(chromeAddRes[os], '_blank')
            }}/>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import { ChromeDownload } from 'dt-react-component'
        <ChromeDownload downloadChrome={() => {}} />
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
