import React from 'react';
import { render } from '@testing-library/react';

import Loading from '../loading';

describe('Test Chat Loading', () => {
    it('Match Snapshots', () => {
        expect(render(<Loading loading>test</Loading>)).toMatchSnapshot('loading');
        expect(render(<Loading loading={false}>test</Loading>)).toMatchSnapshot('not loading');
    });
});
