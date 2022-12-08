import React from 'react';
import { Breadcrumb } from 'dt-react-component';
import { createMemoryHistory, Router, Route } from 'react-router-3';

const history = createMemoryHistory();

const App = (props: any) => {
    return (
        <div>
            <h1>history: {props.location.pathname}</h1>
            <Breadcrumb
                routes={[
                    { name: 'home', path: '/home' },
                    { name: 'about', path: '/about' },
                ]}
                style={{ background: 'dedede' }}
            />
            {props.children}
        </div>
    );
};
const About = () => <h1>about page</h1>;
const Home = () => <h1>home page</h1>;

export default function BreadcrumbRender() {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
            </Route>
        </Router>
    );
}
