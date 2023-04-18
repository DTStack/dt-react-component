import { FORM_PROPS, MODAL_PROPS } from '../antdProps';
import Utils from '../index';

test('test Utils filterAttrByArrays', () => {
    const [modalProps, formProps, restProps] = Utils.filterAttrByArrays(
        { a: 123, b: 321, visible: false, disabled: true },
        [MODAL_PROPS, FORM_PROPS]
    );
    expect(modalProps).toEqual({
        visible: false,
    });

    expect(formProps).toEqual({
        disabled: true,
    });
    expect(restProps).toEqual({
        a: 123,
        b: 321,
    });
});
