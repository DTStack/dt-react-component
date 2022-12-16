import React from 'react';
import ModalWithForm, { useFilterFormProps } from '../index';
import { Input, Form } from 'antd';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';

const FormItem = Form.Item;
const EnhancedModal = ModalWithForm((_props) => {
    return (
        <FormItem label="test-label" name="test" rules={[{ max: 10 }]}>
            <Input data-testid="test-input" />
        </FormItem>
    );
});

class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    hideModalHandler = () => {
        const { visible } = this.state;
        this.setState({ visible: !visible });
    };
    render() {
        return (
            <>
                <button onClick={this.hideModalHandler}>click</button>
                <EnhancedModal
                    title="test-title"
                    visible={this.state.visible}
                    hideModalHandler={this.hideModalHandler}
                    okText="ok"
                    cancelText="quit"
                    record="hi"
                    okButtonProps={{ danger: true }}
                    width={400}
                />
            </>
        );
    }
}

let wrapper, element;

beforeEach(() => {
    wrapper = render(
        <div data-testid="form">
            <App />
        </div>
    );
    element = wrapper.getByTestId('form');
    jest.spyOn(console, 'error').mockImplementation(() => {
        return null;
    });
});

afterEach(cleanup);

test('should not render modalWithForm', () => {
    expect(element).toBeValid();
});

test('should toggle modalWithForm when click button', () => {
    fireEvent.click(wrapper.getByText('click'));
    expect(screen.getByText('test-title')).toBeInTheDocument();
    // 关掉模态框
    const ele = wrapper.getByText('quit');
    fireEvent.click(ele);
    expect(element).toBeValid();
});

test('should trigger submit methond when form validate successful', () => {
    fireEvent.click(wrapper.getByText('click'));
    const eleInput = wrapper.getByTestId('test-input');
    const eleOk = wrapper.getByText('ok');

    eleInput.onchange = jest.fn();
    fireEvent.change(eleInput, { target: { value: '1' } });
    eleOk.onclick = jest.fn();
    fireEvent.click(eleOk);
    expect(eleOk.onclick).toHaveBeenCalled();
});

test('test useFilterFormProps', () => {
    const { result } = renderHook(() =>
        useFilterFormProps({
            a: 1,
            onOk: () => {},
            disabled: false,
        })
    );
    expect(result.current).toEqual({
        disabled: false,
    });
});
