import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NotFound from '..';

describe('test NotFound', () => {
    afterEach(cleanup);

    test('renders not found message', () => {
        const { getByText } = render(<NotFound />);
        const element = getByText(/抱歉，您访问的页面不存在/i);
        expect(element).toBeInTheDocument();
    });
});
