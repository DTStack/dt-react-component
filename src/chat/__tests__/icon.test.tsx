import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { GradientDotIcon, SendColored } from '../icon';

describe('Test Chat Icon', () => {
    beforeEach(cleanup);

    it('Match Snapshots', () => {
        expect(render(<SendColored />).asFragment()).toMatchSnapshot('SendIcon with gradient');
        expect(render(<GradientDotIcon />).asFragment()).toMatchSnapshot('GradientDotIcon');
    });
});
