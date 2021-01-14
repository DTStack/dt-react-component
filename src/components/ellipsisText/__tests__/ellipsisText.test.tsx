import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import EllipsisText from '../index';

const defaultProps = {
    value: 'ellipsis-Test'
}

let wrapper
describe('test ellipsis text if not full display', () => {
    (global as any).document.createRange = () => ({
        selectNodeContents: jest.fn(),
        getBoundingClientRect: jest.fn(() => ({
            width: 1000
        }))
    });

    beforeEach(() => {
        wrapper = render(
            <div style={{ width: 500 }}>
                <EllipsisText {...defaultProps} />
            </div>
        );
    })

    afterEach(() => {
        cleanup()
    })

    test('render correct value in ellipsis', () => {
        const { getByText } = wrapper

        expect(getByText('ellipsis-Test')).toBeInTheDocument()
    })
})
