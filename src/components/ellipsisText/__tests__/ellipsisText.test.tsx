import React from 'react'
import { render } from '@testing-library/react';
import EllipsisText from '../index';

describe('ellipsisText Component test', () => {
    test('should render correct', () => {
        const expectValues = {
            value: '显示的文本',
            width: '100px',
            className: 'test-class-name',
            placement: 'topLeft'
        }
        const { getByTestId } = render(
            <EllipsisText
                value={expectValues.value}
                style={{ width: expectValues.width }}
                className={expectValues.className}
                placement={expectValues.placement}
            />
        );

        const oDiv = getByTestId('ellipsis_text');
        expect(oDiv).not.toBeNull();
        expect(oDiv.innerHTML).toEqual(expectValues.value);
        expect(oDiv.style.width).toEqual(expectValues.width);
        expect(oDiv.classList.contains(expectValues.className)).toEqual(true);
    });
});
