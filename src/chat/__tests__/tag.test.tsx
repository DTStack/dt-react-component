import React from 'react';
import { render } from '@testing-library/react';

import Tag from '../tag';

describe('Test Chat Tag', () => {
    it('Match Snapshots', () => {
        expect(render(<Tag className="test">Tag</Tag>).asFragment()).toMatchSnapshot();
    });
});
