import React from 'react';
import { cleanup, render } from '@testing-library/react';

import TinyTag from '..';

describe('test StatusTag', () => {
    beforeEach(cleanup);
    test('should match snapshot', () => {
        const { asFragment } = render(<TinyTag value="完成" className="dtc-test" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
