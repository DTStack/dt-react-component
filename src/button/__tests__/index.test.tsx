import React from 'react';
import { UploadOutlined } from '@dtinsight/react-icons';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '..';

describe('Button', () => {
    test('should support contentLayout success render', () => {
        const wrapper = render(<Button icon={<UploadOutlined />}>Primary</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders text correctly', () => {
        const { getByText } = render(<Button>Hello</Button>);
        expect(getByText('Hello')).toBeInTheDocument();
    });

    it('renders icon correctly', () => {
        const { container } = render(<Button icon={<UploadOutlined />} />);
        expect(container.querySelector('.dtc-button__icon')).toBeInTheDocument();
        expect(container.querySelector('.dtc-button__text')).not.toBeInTheDocument();
    });

    it('renders icon and text correctly', () => {
        const { getByText, container } = render(<Button icon={<UploadOutlined />}>Search</Button>);
        expect(getByText('Search')).toBeInTheDocument();
        expect(container.querySelector('.dtc-button__icon')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(<Button className="custom-class">Test</Button>);
        expect(container.firstChild).toHaveClass('custom-class');
    });

    it('passes other props to AntdButton', () => {
        const { getByText } = render(<Button type="primary">Primary</Button>);
        expect(getByText('Primary').parentNode).toHaveClass('ant-btn-primary');
    });

    it('applies size class to icon and text', () => {
        const { container } = render(
            <Button icon={<UploadOutlined />} size="small">
                Test
            </Button>
        );
        expect(container.querySelector('.dtc-button__icon--small')).toBeInTheDocument();
        expect(container.querySelector('.dtc-button__text--small')).toBeInTheDocument();
    });
});
