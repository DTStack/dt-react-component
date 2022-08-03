import React from 'react'
import { Button } from 'antd';
import { State, Store } from '@sambego/storybook-state';
import  DragDrawer  from '../../../components/dragDrawer';
const drawerStr = '这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容'
const store = new Store({
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
    drawerStr,
});

export default function DragDrawerRender () {
    const style = {
        margin: '15px 0 10px'
    }
    const drawerRender = (str) => {
        return (
            <div style={{ fontSize: 18, lineHeight: 3, padding: 24 }}>
                {str}
            </div>
        )
    }

    return (
        <React.Fragment>
            <p style={style}>1、可拖拽，有关闭图标</p>
            <State store={store}>
                {(state) => (
                    <React.Fragment>
                        <Button type="primary" onClick={() => store.set({ visible1: !state.visible1 })}>{state.visible1 ? '关闭' : '打开'}</Button>
                        <DragDrawer visible={state.visible1} closable onClose={() => store.set({ visible1: false })}>
                            {drawerRender(state.drawerStr)}
                        </DragDrawer>
                    </React.Fragment>
                )}
            </State>

            <p style={style}>2、不可拖拽，无关闭图标</p>
            <State store={store}>
                {(state) => (
                    <React.Fragment>
                        <Button type="primary" onClick={() => store.set({ visible2: !state.visible2 })}>{state.visible2 ? '关闭' : '打开'}</Button>
                        <DragDrawer draggable={false} visible={state.visible2} width={500} onClose={() => store.set({ visible2: false })}>
                            {drawerRender(state.drawerStr)}
                        </DragDrawer>
                    </React.Fragment>
                )}
            </State>

            <p style={style}>3、展开后可更换抽屉内容</p>
            <State store={store}>
                {(state) => (
                    <React.Fragment>
                        <Button type="primary" onClick={() => store.set({ visible3: !state.visible3 })}>{state.visible3 ? '关闭' : '打开'}</Button>
                        {
                            state.visible3 && (<Button type="primary" style={{ marginLeft: 12 }} onClick={() => store.set({ drawerStr: state.drawerStr === '我是新的抽屉内容' ? drawerStr : '我是新的抽屉内容' })}>更换内容</Button>)
                        }
                        <DragDrawer visible={state.visible3} onClose={() => store.set({ visible3: false })}>
                            {drawerRender(state.drawerStr)}
                        </DragDrawer>
                    </React.Fragment>
                )}
            </State>

            <p style={style}>4、有蒙层，点击蒙层可关闭</p>
            <State store={store}>
                {(state) => (
                    <React.Fragment>
                        <Button type="primary" onClick={() => store.set({ visible4: !state.visible4 })}>{state.visible4 ? '关闭' : '打开'}</Button>
                        <DragDrawer draggable={false} mask visible={state.visible4} onClose={() => store.set({ visible4: false })}>
                            {drawerRender(state.drawerStr)}
                        </DragDrawer>
                    </React.Fragment>
                )}
            </State>
        </React.Fragment>
    )
}
