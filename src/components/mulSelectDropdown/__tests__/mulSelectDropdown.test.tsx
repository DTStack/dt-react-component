import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MulSelectDropdown from '../index';

describe('mulSelectDropdown Component test', () => {
    test('should render correct', () => {
        const expectValues = {
            options: [{ label: '选项一', value: 1 }, { label: '选项二', value: 2, disabled: true }],
            value: [2],
            onOk: (value) => { console.log(value); },
            renderNode: (openFun) => <div data-testid="drop_down_btn" onClick={openFun}>打开下拉</div>
        }
        const { getByTestId } = render(
            <MulSelectDropdown
                value={expectValues.value}
                onOk={expectValues.onOk}
                renderNode={expectValues.renderNode}
                options={expectValues.options}
            />
        );
        fireEvent.click(getByTestId('drop_down_btn'));

        const dropdownEle = document.querySelector('.dtc-mul-select-dropdown');
        const optionBoxEle = document.querySelector('.dtc-option-select-overlay-menu');
        expect(dropdownEle).not.toBeNull();
        expect(dropdownEle.classList.contains('slide-up-appear')).toEqual(true);
        expect(optionBoxEle.childNodes.length).toBe(2);
        let checkoutItem = optionBoxEle.getElementsByClassName('ant-checkbox-wrapper')[1];
        expect(checkoutItem.classList.contains('ant-checkbox-wrapper-disabled')).toEqual(true);
        expect(checkoutItem.classList.contains('ant-checkbox-wrapper-checked')).toEqual(true);

        fireEvent.click(getByTestId('select_cancel_btn'));
        expect(dropdownEle.classList.contains('slide-up-leave')).toEqual(true);
    })
});
