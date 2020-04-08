import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
<<<<<<< HEAD
// import '/node_modules/font-awesome/css/font-awesome.min.css';
=======
import '../node_modules/font-awesome/css/font-awesome.min.css';
>>>>>>> e567c881e4e7434c3ac2e59785d76f0010efc219

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
