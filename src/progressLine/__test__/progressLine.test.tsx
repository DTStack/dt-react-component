import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProgressLine from '..';

describe('test ProgressLine', () => {
    it('renders title and percent', () => {
        const { getByText } = render(<ProgressLine title="Test Title" percent="50%" />);
        expect(getByText('Test Title')).toBeInTheDocument();
        expect(getByText('50%')).toBeInTheDocument();
    });

    it('renders with custom color', () => {
        const { getByTestId } = render(<ProgressLine color="#FF0000" />);
        expect(getByTestId('progress-line')).toHaveStyle('background-color: #FF0000');
    });

    it('renders with custom width', () => {
        const { getByTestId } = render(<ProgressLine width="500px" />);
        expect(getByTestId('progress-line-wrap')).toHaveStyle('width: 500px');
    });
});
