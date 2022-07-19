import React from 'react'
import { Button } from 'antd';
import { State, Store } from '@sambego/storybook-state';
import  DragDrawer  from '../../../components/dragDrawer';
const store = new Store({
    visible1: false,
    visible2: false,
});

export default function DragDrawerRender () {
    const style = {
        margin: '15px 0 10px'
    }
    const drawerRender = (
        <div style={{ fontSize: 18, lineHeight: 3 }}>
            这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容, 这里有很长的一段内容
        </div>
    )

    return (
        <React.Fragment>
            <p style={style}>1、可拖拽</p>
            <Button type="primary" onClick={() => store.set({ visible1: true })}>Open</Button>
            <State store={store}>
                {(state) => (
                    <DragDrawer visible={state.visible1} onClose={() => store.set({ visible1: false })}>
                        {drawerRender}
                    </DragDrawer>
                )}
            </State>

            <p style={style}>2、不可拖拽</p>
            <Button type="primary" onClick={() => store.set({ visible2: true })}>Open</Button>
            <State store={store}>
                {(state) => (
                    <DragDrawer draggable={false} visible={state.visible2} width={500} onClose={() => store.set({ visible2: false })}>
                        {drawerRender}
                    </DragDrawer>
                )}
            </State>
        </React.Fragment>
    )
}
