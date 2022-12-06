import React from 'react';
import KeyEventListener from '../index';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
const { KeyCombiner } = KeyEventListener;
describe('test KeyCombiner suite', () => {
    const text = 'command+shift+f';
    let dom: any, element: any;
    beforeEach(() => {
        dom = render(
            <KeyCombiner
                onTrigger={() => {
                    console.log('keyAction');
                }}
                keyMap={{
                    70: true,
                    91: true,
                    16: true,
                }}
            >
                <div>{text}</div>
            </KeyCombiner>
        );
        element = dom.getByTestId('test_keyCombiner');
    });
    afterEach(() => {
        cleanup();
    });
    test('snapshot match', () => {
        expect(element).toMatchSnapshot();
    });
    test('test key code', () => {
        fireEvent.keyPress(element, { key: 'Enter', code: 'Enter' });
    });
    test('should render the correct text', () => {
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(`${text}`);
    });
});
