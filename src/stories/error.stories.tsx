import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Error from '../components/error';

const stories = storiesOf('error 组件', module);
stories.addDecorator(withKnobs)

stories.add('error', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>{` 当发生错误时，错误会被componentDidCatch捕获，避免页面崩溃降低用户体验，在这时可以渲染这个组件`}</p>
        <h2>示例</h2>
        <Error />
    </div>
), {
    info: {
        propTablesExclude: [Error],
        text: `
            代码示例：
            ~~~js
            import { ErrorComponent } from 'dt-react-component';
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
                    return hasError ? <ErrorComponent /> : children;
                }
            }
            ~~~
        `
    }
})
