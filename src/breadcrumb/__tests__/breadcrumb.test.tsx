import React from 'react';
import Breadcrumb from '../index';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory, Router, Route, IndexRoute } from 'react-router-3';

const defaultProps = {
    routes: [
        {
            name: 'home',
            path: '/home',
        },
        {
            name: 'about',
            path: '/about',
        },
    ],
    style: {
        backgroundColor: '#dedede',
    },
};

const App = (props: any) => {
    return (
        <div>
            {<Breadcrumb {...defaultProps} />}
            {props.children}
        </div>
    );
};
const About = () => <h1>about page</h1>;
const Home = () => <h1>home page</h1>;

describe('test breadcrumb', () => {
    afterEach(() => {
        cleanup();
    });

    test('should support BreadCrumb render correct with defaultProps', () => {
        const { container } = render(<Breadcrumb {...defaultProps} />);
        expect(container.querySelector('.dtc-breadcrumb')).toHaveStyle('background-color: #dedede');
        expect(container.querySelector('.anticon-right')).toHaveAttribute('aria-label', 'right');
        expect(container.firstChild).toMatchSnapshot();
    });

    test('should support Breadcrumb custom separator', () => {
        const { container } = render(<Breadcrumb separator=">" {...defaultProps} />);
        expect(container.querySelector('.ant-breadcrumb-separator')).toHaveTextContent('>');
    });
    test('should support Breadcrumb custom CSSProperties', () => {
        const { container } = render(
            <Breadcrumb {...defaultProps} style={{ background: '#333', color: '#000' }} />
        );
        expect(container.querySelector('.dtc-breadcrumb')).toHaveStyle({
            background: '#333',
            color: '#000',
        });
    });

    test('should support Breadcrumb custom className', () => {
        const { container } = render(<Breadcrumb {...defaultProps} className="testBreadcrumb" />);
        const wrap = container.firstChild;
        expect(wrap).toHaveClass('testBreadcrumb');
    });

    test('should support Breadcrumb navigate to home router when click ', () => {
        const history = createMemoryHistory();
        const { container, getByTestId } = render(
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                </Route>
            </Router>
        );
        expect(container.innerHTML).toMatch('about');
        fireEvent.click(getByTestId('/home-link'));
        expect(container.innerHTML).toMatch('home page');
    });
});
