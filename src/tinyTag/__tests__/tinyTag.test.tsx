import React from 'react';
import { cleanup, render } from '@testing-library/react';

import TinyTag from '..';

describe('test StatusTag', () => {
    beforeEach(cleanup);
    test('should match snapshot', () => {
        const { asFragment } = render(<TinyTag value="完成" className="dtc-test" />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render with icon', () => {
        const Icon = () => <span data-testid="custom-icon">🔥</span>;
        const { getByTestId } = render(<TinyTag value="热门" icon={<Icon />} />);
        expect(getByTestId('custom-icon')).toBeInTheDocument();
    });

    test('should render without icon', () => {
        const { container } = render(<TinyTag value="普通" />);
        expect(container.querySelector('.dtc-tinyTag__icon')).toBeNull();
    });
});
