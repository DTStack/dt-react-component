import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import ErrorBoundary from '../components/errorBoundary';

const stories = storiesOf('ErrorBoundary 错误边界', module);
stories.addDecorator(withKnobs)

const propDefinitions = [
    {
        property: 'children',
        propType: 'React.ReactNode',
        required: true,
        description: '子组件',
        defaultValue: '--'
    }
]

class App extends React.Component {
    state = {
        count: 0
    }
    render () {
        const { count } = this.state;
        if (count % 2) throw new Error('test error');
        else {
            return (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <button
                        style={{
                            border: 'none',
                            backgroundColor: '#1890ff',
                            cursor: 'pointer',
                            height: '32px',
                            borderRadius: '4px'
                        }}
                        onClick={() => this.setState({ count: count + 1 })}
                    >
                        catch error
                    </button >
                    <h2>hello, dt-react-component</h2>
                </div >
            )
        }
    }
}

stories.add('ErrorBoundary', () => (

    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>{`错误边界可以捕获子组件的渲染、生命周期函数以及构造函数内的错误，记录错误日志并在错误发生时，
        展示LoadError页面，以避免因为局部组件错误而导致的整个组件树崩溃。`}</p>
        <h2>示例</h2>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </div>
), {
    info: {
        propTablesExclude: [App],
        text: `
            代码示例：
            ~~~js
            import { ErrorBoundary } from 'dt-react-component';
            class App extends React.Component {
                state = {
                    count: 0
                }
                render () {
                    const { count } = this.state;
                    if (count % 2) throw new Error('test error');
                    else {
                        return (
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <button
                                    style={{
                                        border: 'none',
                                        backgroundColor: '#1890ff',
                                        cursor: 'pointer',
                                        height: '32px',
                                        borderRadius: '4px'
                                    }}
                                    onClick={() => this.setState({ count: count + 1 })}
                                >
                                    catch error
                                </button >
                                <h2>hello, dt-react-component</h2>
                            </div >
                        )
                    }
                }
            }
            export default class Demo extends React.Component {
                render() {
                    return (
                        <ErrorBoundary>
                            <App />
                        </ErrorBoundary>
                    )
                }
            }
            ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
