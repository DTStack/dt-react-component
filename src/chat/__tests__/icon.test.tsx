import React from 'react';
import { cleanup, render } from '@testing-library/react';

import {
    AssistantAvatarIcon,
    CopyIcon,
    GradientDotIcon,
    PauseIcon,
    ReloadIcon,
    RobotIcon,
    SendIcon,
    ShiningIcon,
} from '../icon';

describe('Test Chat Icon', () => {
    beforeEach(cleanup);

    it('Match Snapshots', () => {
        expect(render(<AssistantAvatarIcon />).asFragment()).toMatchSnapshot('AssistantAvatarIcon');
        expect(render(<ReloadIcon />).asFragment()).toMatchSnapshot('ReloadIcon');
        expect(render(<PauseIcon />).asFragment()).toMatchSnapshot('PauseIcon');
        expect(render(<RobotIcon />).asFragment()).toMatchSnapshot('RobotIcon');
        expect(render(<SendIcon />).asFragment()).toMatchSnapshot('SendIcon');
        expect(render(<SendIcon gradient />).asFragment()).toMatchSnapshot(
            'SendIcon with gradient'
        );
        expect(render(<CopyIcon />).asFragment()).toMatchSnapshot('CopyIcon');
        expect(render(<GradientDotIcon />).asFragment()).toMatchSnapshot('GradientDotIcon');
        expect(render(<ShiningIcon />).asFragment()).toMatchSnapshot('ShiningIcon');
    });
});
