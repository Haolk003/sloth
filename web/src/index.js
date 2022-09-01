import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';
import store from "./context";
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
ReactDOM.render(
<Router>
    <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    </React.StrictMode>
</Router>,
document.getElementById('root'));   