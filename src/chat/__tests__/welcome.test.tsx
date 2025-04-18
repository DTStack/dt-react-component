import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Welcome, { type IWelcomeProps } from '../welcome';

describe('Test Welcome Component', () => {
    beforeEach(() => cleanup());

    const defaultProps: IWelcomeProps = {
        title: 'Welcome Title',
        description: 'This is a description',
    };

    it('matches the snapshot with default props', () => {
        const { asFragment } = render(<Welcome {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot('default welcome');
    });

    it('renders with a custom icon', () => {
        const customIcon = <div data-testid="custom-icon">Custom Icon</div>;
        const { getByTestId } = render(<Welcome {...defaultProps} icon={customIcon} />);
        expect(getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('applies custom className and style', () => {
        const { container } = render(
            <Welcome
                {...defaultProps}
                className="custom-class"
                style={{ backgroundColor: 'red' }}
            />
        );
        expect(container.firstChild).toHaveClass('custom-class');
        expect(container.firstChild).toHaveStyle('background-color: red');
    });

    it('renders title and description correctly', () => {
        const { getByText } = render(<Welcome {...defaultProps} />);
        expect(getByText('Welcome Title')).toBeInTheDocument();
        expect(getByText('This is a description')).toBeInTheDocument();
    });

    it('renders without description when not provided', () => {
        const { queryByText } = render(<Welcome title="Title Only" />);
        expect(queryByText('Title Only')).toBeInTheDocument();
        expect(queryByText('This is a description')).not.toBeInTheDocument();
    });
});
