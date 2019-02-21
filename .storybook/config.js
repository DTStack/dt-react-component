import { configure, addDecorator  } from '@storybook/react';

// 全局加载装饰器
// addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>);

/**
 * 动态加载所有stories
 */
const req = require.context('../src/stories', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(fileName => req(fileName));
}

configure(loadStories, module);