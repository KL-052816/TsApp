import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import {BrowserRouter as Router, Switch, useLocation} from 'react-router-dom';
import App from './app';
import Exercise from './exercise';
import A from './text';

export const authRoutes = [
    <Route key={'/app'} path={'/app'}>
        <App />
    </Route>,
    <Route key={'/exercise'} path={'/exercise'}>
        <Exercise />
    </Route>,
];
const routes = [
    {
        path: '/',
        exact: true,
        component: App,
    },
    {
        path: '/app',
        exact: true,
        component: App,
    },
    {
        path: '/exercise',
        exact: true,
        component: Exercise,
    },
    {
        path: '/a',
        component: A,
    },
];
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    console.log('app', App);

    return (
        <div style={{margin: '24px 24px'}}>
            <Router>
                <Routes>
                    {routes.map(item => (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={<item.component />}
                        ></Route>
                    ))}
                    <Route key={'/app'} path={'/app'} element={<App />}></Route>
                </Routes>

                {/* <App /> */}
            </Router>
        </div>

        // <Router>
        //         {/* {
        //         ...authRoutes
        //         } */}
        //         <Route key={'/app'} path={'/app'}>
        //             <App />
        //         </Route>
        //         <Route key={'/exercise'} path={'/exercise'}>
        //             <Exercise />
        //         </Route>
        // </Router>
    );
}
