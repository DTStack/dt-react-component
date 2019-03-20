import React from 'react';
import { storiesOf } from '@storybook/react';
import SlidePanel from '../components/slidePanel';
import { boolean, object, text } from '@storybook/addon-knobs';

storiesOf('SlidePanel', module)
    .add('基本用法', () =>{
        const groupId = 'slidepanel'
        const defaultStyle = {
            right:'-20px',
            width:'80%',
            minHeight: '600px',
            height: '100%'
        }
        const style = object('style', defaultStyle, groupId);
        const defayltText = 'hello slidePanel'
        const children = text('children', defayltText, groupId)
        return <SlidePanel
            visible={boolean('visible', true, groupId)}
            style={style}
            onClose={()=>{
                console.log('click')
            }}
        >
            <div>{children}</div>
        </SlidePanel>
    })