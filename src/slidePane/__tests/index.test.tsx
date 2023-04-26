import React from 'react';
import SlidePane from '../index';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test SlidePane ', () => {
    const expectValues = {
        children: (
            <div>
                <h1>success</h1>
            </div>
        ),
        visible: true,
        style: { color: 'red', background: '#FF7C12' },
    };
    test('snapshot match', () => {
        const { asFragment } = render(
            <SlidePane visible={expectValues.visible}>{expectValues.children}</SlidePane>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    test('should render correct', () => {
        render(
            <SlidePane visible={expectValues.visible} style={expectValues.style}>
                {expectValues.children}
            </SlidePane>
        );
        const wrapper = document.getElementsByClassName('dtc-slide-pane');
        expect(wrapper?.[0]).toHaveStyle(expectValues.style);
        expect(screen.getByRole('heading')).toHaveTextContent('success');
    });
    test('should be invisible', () => {
        const { container } = render(
            <SlidePane visible={false}>{expectValues.children}</SlidePane>
        );
        expect(container).not.toHaveClass();
    });
    test('should callback to be called', () => {
        const fn = jest.fn();
        const { getByRole } = render(
            <SlidePane visible onClose={fn}>
                {expectValues.children}
            </SlidePane>
        );
        const oImg = getByRole('img');
        fireEvent.click(oImg);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
