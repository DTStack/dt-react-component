import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import LoadError from '../components/loadError';

const stories = storiesOf('LoadError 组件', module);
stories.addDecorator(withKnobs)

stories.add('LoadError', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>{` 当发生错误时，错误会被componentDidCatch捕获，避免页面崩溃降低用户体验，在这时可以渲染这个组件`}</p>
        <h2>示例</h2>
        <LoadError />
    </div>
), {
    info: {
        propTablesExclude: [LoadError],
        text: `
            代码示例：
            ~~~js
            import { LoadError } from 'dt-react-component';
            class ErrorBoundary extends React.Component<React.FC> {
                state = {
                    hasError: false;
                }
                componentDidCatch () {
                    this.setState({ hasError: true });
                }
                render () {
                    const { hasError } = this.state;
                    const { children } = this.props;
                    return hasError ? <LoadError /> : children;
                }
            }
            ~~~
        `
    }
})
