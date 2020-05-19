import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { object } from '@storybook/addon-knobs';
import TableCell from '../components/table-cell';

import '../style/index.scss';
const stories = storiesOf('TableCell', module);
stories.add('tableCell', () => {
    return (
        <TableCell />
    )
}, {
    info: {
        text: `
        TableCell使用
        ~~~js
            <TableCell/>
        ~~~
        `
    }
})
