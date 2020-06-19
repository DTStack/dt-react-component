
## 组件文档规范

stories 文档编写几点要求如下：

+ 最外层元素给定类名 **story_wrapper**
+ 文档主要为三大模块（何时使用、示例、Prop Types）
+ 模块标题均使用 **h2** 标签

#### 模块介绍
1. 模块一：何时使用  
    主要介绍该组件用途以及使用的业务场景
2. 模块一：示例  
    主要介绍该组件如何使用，以及动态交互编写
3. Prop Types （标题名称目前插件不支持替换～）  
    组件 API 配置信息

其中模块一、模块二采用 jsx 语法，具体文档样式可以根据具体情况自定义书写， **src/stories/style/** 文件夹下可编写不同组件文档样式。
模块三采用 storybook-info 提供的 api 渲染出每个组件 API 配置

#### 具体编写可参考如下示例
```plain
stories.add('slidepanel', () => {
    const groupId = 'slidepanel'
    const defaultStyle = {
        right: '-20px',
        width: '80%',
        minHeight: '600px',
        height: '100%'
    }
    const style = object('style', defaultStyle, groupId);
    const defayltText = 'hello slidePanel'
    const children = text('children', defayltText, groupId)
    return (
        <div className='story_wrapper'>
            // 模块一
            <h2>何时使用</h2>
            <p>从页面右侧弹出面板，展示相应内容</p>
            // 模块二
            <h2>示例</h2>
            <Button style={{ marginBottom: '10px' }} onClick={() => {
                const actionVal: any = store.get('visible')
                action(actionVal)
                store.set({
                    visible: !store.get('visible')
                })
            }}>click me</Button>
            <p>
                尝试在 knobs 栏调试 slidePanel 组件
            </p>
            // 组件交互演示
            <State store={store}>
                <SlidePane
                    visible={store.get('visible')}
                    style={style}
                    onClose={() => {
                        action('我该关闭啦')
                        store.set({
                            visible: false
                        })
                    }}
                >
                    <div>{children}</div>
                </SlidePane>
            </State>
        </div>
    )
}, {
    // 模块三
    info: {
        text: `
        **代码示例：**
        ~~~js
        <SlidePane
            visible={this.props.visible}
            style={style}
            onClose={this.props.onClose}
        >
            'hello slidePanel'
        </SlidePane>
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions }),
        propTablesExclude: [Button, State]
    }
})
```





