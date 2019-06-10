import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, document.getElementById('root'));
    //import React from 'react';
    //import ReactDOM from 'react-dom';
    //import App from './App';
    //import './index.css';
    //
    //
    //import {BrowserRouter, withRouter} from 'react-router-dom';
    //const AppW = withRouter(App)
    //
    //ReactDOM.render(
    //    <BrowserRouter>
    //     <AppW/>
    //    </BrowserRouter>, document.getElementById('root'));