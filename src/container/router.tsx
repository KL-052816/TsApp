import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './app';
import Exercise from './exercise';

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
        component: App
    },
    {
        path: '/app',
        exact: true,
        component: App
    },{
        path: '/exercise',
        exact: true,
        component: Exercise 
    }
]
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    console.log('app', App);

    return (
        <Router>
            {/* <Route key={'/app'} path={'/app'}>
                <App />
            </Route> */}
            <App />
        </Router>
        
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
