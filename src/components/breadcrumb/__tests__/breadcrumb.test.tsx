import React from 'react'
import BreadCrumb from '../index';
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory, Router, Route, IndexRoute } from 'react-router'

const testProps = {
    routes: [
        {
            breadcrumbName: 'home',
            path: '/home'
        },
        {
            breadcrumbName: 'about',
            path: '/about'
        }
    ],
    style: {
        backgroundColor: '#dedede'
    }
}

const App = (props) => {
    return (
        <div>
            {<BreadCrumb {...testProps} />}
            {props.children}
        </div>
    )
}
const About = () => <h1>about page</h1>
const Home = () => <h1>home</h1>

describe('test breadcrumb', () => {
    afterEach(() => {
        cleanup();
    })
    test('should render correct BreadCrumb with testProps', () => {
        const { getByTestId } = render(<BreadCrumb {...testProps} />);
        const element = getByTestId('test-breadcrumb');
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyle('background-color: #dedede');
    })

    test('should navigate to home router when click ', () => {
        const history = createMemoryHistory()
        const { container, getByTestId } = render(
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                </Route>
            </Router>
        );
        expect(container.innerHTML).toMatch('about')
        fireEvent.click(getByTestId('/home-link'))
        expect(container.innerHTML).toMatch('home')
    })
    test('should not navigate when click', () => {
        const history = createMemoryHistory()
        const { container, getByText } = render(
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                </Route>
            </Router>
        );
        fireEvent.click(getByText('about page'));
        expect(container.innerHTML).toMatch('about page');
    })
})
