import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { CopyIcon, GradientDotIcon, PauseIcon, ReloadIcon, SendIcon, ShiningIcon } from '../icon';

describe('Test Chat Icon', () => {
    beforeEach(cleanup);

    it('Match Snapshots', () => {
        expect(render(<ReloadIcon />).asFragment()).toMatchSnapshot('ReloadIcon');
        expect(render(<PauseIcon />).asFragment()).toMatchSnapshot('PauseIcon');
        expect(render(<SendIcon />).asFragment()).toMatchSnapshot('SendIcon');
        expect(render(<SendIcon gradient />).asFragment()).toMatchSnapshot(
            'SendIcon with gradient'
        );
        expect(render(<CopyIcon />).asFragment()).toMatchSnapshot('CopyIcon');
        expect(render(<GradientDotIcon />).asFragment()).toMatchSnapshot('GradientDotIcon');
        expect(render(<ShiningIcon />).asFragment()).toMatchSnapshot('ShiningIcon');
    });
});
