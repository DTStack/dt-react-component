import React from 'react';
import Resize from '../index';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

class Component extends React.PureComponent {
    state = {
        count: 0
    }
    render () {
        const { count } = this.state;
        return (
            <Resize onResize={() => this.setState({ count: count + 1 })} >
                <div
                    data-testid='test'
                    style={{
                        height: '240px',
                        width: '100%'
                    }}
                >
                    {count}
                </div>
            </ Resize >
        )
    }
}

describe('test Resize', () => {
    let wrapper, element;
    beforeEach(() => {
        wrapper = render(<Component />);
        element = wrapper.getByTestId('test');
    })
    afterEach(() => {
        cleanup();
    })
    test('should calculate current width', () => {
        expect(element.firstChild).toMatchInlineSnapshot('0');
        fireEvent(
            window,
            new Event('resize')
        )
        expect(element.firstChild).toMatchInlineSnapshot('1');
    })
})
