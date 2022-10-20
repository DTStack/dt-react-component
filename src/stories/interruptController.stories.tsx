import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';

const stories = storiesOf('Interrupt 中止请求', module);
stories.addDecorator(withKnobs);

stories.add(
    '@InterruptController',
    () => {
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>「切换路由」或「销毁页面」时中止还在 pending 中的请求</p>
            </div>
        );
    },
    {
        info: {
            text: `
                    在 class 组件中使用：
                    ~~~js
                    interface IProps {
                        sinal: never;  // 也可以用别的方式传入，或者直接 controller.sinal 亦可

                    }

                    @ControllerServer
                    class XXXComponent extends React.Component<IProps,IState> {
                        ...
                        API.xxx({ params }, signal).then(res => {
                            
                        }).finally(() => {
                            
                        })
                        ...
                    }
                    ~~~

                    </br>

                    在function组件中使用
                    ~~~js
                    const XXXComponent = () => {
                        ...
                        const controller = useMemo(() => new AbortController(), []);
                        ...
                        API.xxx({ params }, signal).then(res => {
                          
                        }).finally(() => {
                          
                        })
                        ...
                    }
                    ~~~
                `,
            TableComponent: () => PropsTable({}),
        },
    }
);
