import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MulSelectDropdown from '../index';

const cancelText = '取消';
const okText = '确定';

describe('mulSelectDropdown Component test', () => {
    test('should render correct', () => {
        const expectValues = {
            options: [
                { label: '选项一', value: 1 },
                { label: '选项二', value: 2, disabled: true },
            ],
            value: [2],
            cancelText,
            okText,
            onOk: (value) => {
                console.log(value);
            },
            renderNode: (openFun) => (
                <div data-testid="drop_down_btn" onClick={openFun}>
                    打开下拉
                </div>
            ),
        };
        const { getByTestId } = render(
            <MulSelectDropdown
                className="testMulSelectDropdown"
                {...expectValues}
            />
        );
        fireEvent.click(getByTestId('drop_down_btn'));

        const dropdownEle = document.querySelector('.dtc-mul-select-dropdown');
        const classDownEle = document.querySelector('.testMulSelectDropdown');
        const optionBoxEle = document.querySelector('.dtc-option-select-overlay-menu');
        expect(dropdownEle).not.toBeNull();
        expect(classDownEle).not.toBeNull();
        expect(optionBoxEle.childNodes.length).toBe(2);
        const checkoutItem = optionBoxEle.getElementsByClassName('ant-checkbox-wrapper')[1];
        expect(checkoutItem.classList.contains('ant-checkbox-wrapper-disabled')).toEqual(true);
        expect(checkoutItem.classList.contains('ant-checkbox-wrapper-checked')).toEqual(true);

        const okButton = getByTestId('select_ok_btn');
        expect(okButton.textContent.replace(' ', '')).toEqual(okText);

        const cancelButton = getByTestId('select_cancel_btn');
        expect(cancelButton.textContent.replace(' ', '')).toEqual(cancelText);
        fireEvent.click(cancelButton);
        expect(dropdownEle.classList.contains('ant-dropdown-hidden')).toEqual(true);
    });
});
