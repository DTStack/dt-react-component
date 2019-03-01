import { configure, addDecorator  } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import { themes } from '@storybook/components';
// 全局加载装饰器
// addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>);
addDecorator(
    withOptions({
        // name: 'Foo',
        // theme: themes.dark
        showSearchBox: false,
        showAddonsPanel: true,
        addonPanelInRight : true,
        enableShortcuts : true,
    })
)
addDecorator(withNotes);
/**
 * 动态加载所有stories
 */
const req = require.context('../src/stories', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(fileName => req(fileName));
}

configure(loadStories, module);