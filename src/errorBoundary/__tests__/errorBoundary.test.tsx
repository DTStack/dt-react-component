import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from '../index';
const IProps = {
    children: <div>children</div>,
};
class ThrowError extends React.Component {
    componentDidMount() {
        throw new Error('测试error, 请忽略');
    }
    render() {
        return <div>测试error</div>;
    }
}

let wrapper: any;
describe('test ErrorBoundary', () => {
    beforeEach(() => {
        wrapper = render(<ErrorBoundary {...IProps} />);
        jest.spyOn(console, 'error').mockImplementation(() => {
            return null;
        });
        jest.spyOn(console, 'log').mockImplementation(() => {
            return null;
        });
    });
    afterEach(() => {
        jest.spyOn(console, 'error').mockRestore();
        jest.spyOn(console, 'log').mockRestore();
        cleanup();
    });
    test('should render children without error', () => {
        const element = wrapper.getByText('children');
        expect(element).toBeInTheDocument();
        expect(element).toMatchSnapshot();
    });
    // 测试发生错误情况
    test('should render error when some error occur', () => {
        const errorFn = jest.fn();
        const wrapper = render(
            <ErrorBoundary onError={(err) => errorFn(err)}>
                <ThrowError />
            </ErrorBoundary>
        );
        const element = wrapper.getByText('刷新');
        expect(element).toBeInTheDocument();
        expect(console.error).toHaveBeenCalledTimes(2);
        expect(errorFn.mock.calls[0][0].message).toEqual('测试error, 请忽略');
    });

    test('should render custom error page', () => {
        const wrapper = render(
            <ErrorBoundary errorPage={<div>这是自定义错误页面</div>}>
                <ThrowError />
            </ErrorBoundary>
        );
        expect(wrapper.getByText('这是自定义错误页面')).toBeInTheDocument();
    });
});
