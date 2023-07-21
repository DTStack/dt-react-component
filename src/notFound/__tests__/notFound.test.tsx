import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NotFound from '..';

describe('test NotFound', () => {
    afterEach(cleanup);

    test('renders not found message', () => {
        const { getByText } = render(<NotFound />);
        const element = getByText(/亲，是不是走错地方了？/i);
        expect(element).toBeInTheDocument();
    });
});
