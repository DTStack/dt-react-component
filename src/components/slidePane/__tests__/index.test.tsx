import React from 'react';
import SlidePane from '../index';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test SlidePane ', () => {
    const expectValues = {
        children: (
            <div>
                <h1>success</h1>
            </div>
        ),
        visible: true,
        style: { color: 'red', background: '#FF7C12' }
    };
    test('should render correct', () => {
        const { container, getByTestId } = render(
            <SlidePane visible={expectValues.visible} style={expectValues.style}>
                {expectValues.children}
            </SlidePane>
        );
        expect(container.firstChild).toHaveStyle(expectValues.style);
        const oDiv = getByTestId('slidepane_container');
        expect(oDiv).not.toBeNull();
        expect(oDiv).toBeVisible();
        expect(oDiv.innerHTML).toEqual('<div><h1>success</h1></div>');
        expect(container).toMatchSnapshot();
    });
    test('should be invisible', () => {
        const { getByTestId } = render(<SlidePane visible={false}>{expectValues.children}</SlidePane>);
        const oDiv = getByTestId('slidepane_container');
        expect(oDiv).not.toBeVisible();
    });
});
