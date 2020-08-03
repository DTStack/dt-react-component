import React from 'react'
import ModalWithForm from '../index';
import { Form, Input } from 'antd';
import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

const FormItem = Form.Item;
const Modal = ModalWithForm((props) => {
    const { form: { getFieldDecorator } } = props
    return (
        <FormItem label='test-label'>
            {getFieldDecorator('test', {
                rules: [{ max: 10 }]
            })(
                <Input data-testid='test-input' />
            )}
        </FormItem>
    )
})
const submit = jest.fn();
class App extends React.Component<any, any> {
    constructor (props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    hideModelHandler = () => {
        const { visible } = this.state
        this.setState({ visible: !visible });
    }
    render () {
        return (
            <>
                <button onClick={this.hideModelHandler}>click</button>
                <Modal
                    title='test-title'
                    visible={this.state.visible}
                    hideModelHandler={this.hideModelHandler}
                    okText='ok'
                    cancelText='quit'
                    record='hi'
                    onSubmit={submit}
                />
            </>
        )
    }
}

let wrapper, element;

beforeEach(() => {
    wrapper = render(<div data-testid="form"><App /></div>);
    element = wrapper.getByTestId('form');
    jest.spyOn(console, 'error').mockImplementation(() => { return null })
})

afterEach(cleanup);

test('should not render BaseForm', () => {
    expect(element).toBeValid();
})

test('should toggle BaseForm when click button', () => {
    fireEvent.click(wrapper.getByText('click'))
    expect(screen.getByText('test-title')).toBeInTheDocument();
    // 关掉模态框
    const ele = wrapper.getByText('quit');
    fireEvent.click(ele);
    expect(element).toBeValid();
})

test('should change input value when input', () => {
    // 点击按钮打开模态框
    fireEvent.click(wrapper.getByText('click'));
    const ele = wrapper.getByTestId('test-input');
    ele.onchange = jest.fn();
    fireEvent.change(ele, { target: { value: '1' } });
    expect(ele.onchange).toHaveBeenCalled();
    expect(ele.value).toBe('1');
    const eleQuit = wrapper.getByText('quit');
    fireEvent.click(eleQuit);
})

test('baseForm not to be visible', () => {
    fireEvent.click(wrapper.getByText('click'));
    const ele = wrapper.getByText('ok');
    ele.onclick = jest.fn();
    fireEvent.click(ele);
    expect(ele.onclick).toHaveBeenCalled();
    expect(submit).toHaveBeenCalled();
})

test('input content length more then 10', () => {
    fireEvent.click(wrapper.getByText('click'));
    const ele = wrapper.getByTestId('test-input');
    ele.onchange = jest.fn();
    jest.spyOn(console, 'warn').mockImplementation(() => { return null });
    fireEvent.change(ele, { target: { value: '1234567891011' } });
    expect(console.warn).toHaveBeenCalledTimes(1);
})
