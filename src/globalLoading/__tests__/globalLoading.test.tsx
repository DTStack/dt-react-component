import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GlobalLoading from '..';

describe('test GlobalLoading', () => {
    it('renders loading title', () => {
        const { getByText } = render(<GlobalLoading loadingTitle="Test Title" />);
        const titleElement = getByText(/Test Title/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('renders with custom class name', () => {
        const { container } = render(<GlobalLoading className="test-class" />);
        expect(container.firstChild).toHaveClass('test-class');
    });

    it('renders with custom main background', () => {
        const { container } = render(<GlobalLoading mainBackground="#000" />);
        expect(container.firstChild).toHaveStyle('background: #000');
    });

    it('renders with custom circle background', () => {
        const { container } = render(<GlobalLoading circleBackground="#000" />);
        const circleElement = container.querySelector('.dtc-dot');
        expect(circleElement).toHaveStyle('background: #000');
    });

    it('renders with custom title color', () => {
        const { container } = render(<GlobalLoading titleColor="#000" />);
        const titleElement = container.querySelector('.dtc-global-loading-title');
        expect(titleElement).toHaveStyle('color: #000');
    });
});
