import { configure, addDecorator, addParameters, setAddon  } from '@storybook/react';
 // 避免jest识别webpack context 报错
import requireContext from 'require-context.macro';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import chaptersAddon from 'react-storybook-addon-chapters';
import { repository, version } from "../package.json"
setAddon(chaptersAddon);
addDecorator(withNotes);
addDecorator(withKnobs);
// addReadme与withInfo不能共存
addDecorator(withInfo); 
/**
 * 全局设置 info 样式
 * info-addons源样式
 * Overrides styles of addon. The object should follow this shape:
 * https://github.com/storybookjs/storybook/blob/master/addons/info/src/components/Story.js#L19
 */
addParameters({
    info: {
        inline: true,
        source: false,
        styles: stylesheet => ({
            // Setting the style with a function
            ...stylesheet,
            infoBody: {
                ...stylesheet.infoBody,
                padding: '20px 40px 20px'
            },
            header: {
              ...stylesheet.header,
              h1: {
                ...stylesheet.header.h1,
              },
            },
        }),
    }
});

addDecorator(withOptions({
    name: `组件库 v${version}`,
    url: repository,
    sidebarAnimations: true,
}))
/**
 * 动态加载所有stories
 */
function loadStories() {
    const req = requireContext('../src/stories', true, /\.stories\.(ts|tsx)$/);
    const allExport = [require('../src/stories/index.stories')]; // 第一排序
    req.keys().forEach(fileName => allExport.push(req(fileName)));
    return allExport;
}
configure(loadStories, module);