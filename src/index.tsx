import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apps from './container/app'
import reportWebVitals from './reportWebVitals';
import Router from './container/router'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Apps /> */}
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
