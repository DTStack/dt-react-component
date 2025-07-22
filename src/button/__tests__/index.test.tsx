import React from 'react';
import { UploadOutlined } from '@dtinsight/react-icons';
import { render, screen } from '@testing-library/react';

import Button from '../index';

describe('Button', () => {
    it('renders button with text correctly', () => {
        render(<Button>Test Button</Button>);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('renders button with icon correctly', () => {
        const { container } = render(<Button icon={<UploadOutlined />}>With Icon</Button>);
        expect(container.querySelector('.dtc-button__icon')).toBeInTheDocument();
        expect(screen.getByText('With Icon')).toBeInTheDocument();
    });

    it('renders icon-only button correctly', () => {
        const { container } = render(<Button icon={<UploadOutlined />} />);
        expect(container.querySelector('.dtc-button__icon')).toBeInTheDocument();
        expect(container.querySelector('.dtc-button__text')).toBeNull();
    });

    it('applies custom className correctly', () => {
        const { container } = render(<Button className="custom-class">Custom Class</Button>);
        expect(container.querySelector('.dtc-button.custom-class')).toBeInTheDocument();
    });

    it('passes other props to antd Button', () => {
        render(
            <Button type="primary" data-testid="primary-button">
                Primary
            </Button>
        );
        const button = screen.getByTestId('primary-button');
        expect(button).toHaveClass('ant-btn-primary');
    });

    it('applies correct size to icon and text', () => {
        const { container } = render(
            <Button size="small" icon={<UploadOutlined />}>
                Small Button
            </Button>
        );
        expect(container.querySelector('.dtc-button__icon--small')).toBeInTheDocument();
        expect(container.querySelector('.dtc-button__text--small')).toBeInTheDocument();
    });
});
