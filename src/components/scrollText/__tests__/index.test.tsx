
import React from 'react';
import ScrollText from '../index';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test ScrollText suite', () => {
    let dom, element;
    beforeEach(() => {
        dom = render(<ScrollText
            value='scroll'
        >
        </ScrollText>)
        element = dom.getByTestId('test-scroll-text');
    })
    afterEach(() => {
        cleanup()
    })
    test('snapshot match', () => {
        expect(element).toMatchSnapshot();
    })
    test('should render the correct text', () => {
        expect(element).toBeInTheDocument();
        expect(element).toHaveValue('scroll')
    })
})
