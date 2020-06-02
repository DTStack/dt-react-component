import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TableCell from '../components/table-cell';

import '../styles/index.scss';
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
