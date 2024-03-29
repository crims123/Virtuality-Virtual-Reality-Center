import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import {Provider} from "react-redux";
import { BrowserRouter} from 'react-router-dom';
// Routes
import AppRoutes from './routes';


ReactDOM.render(
<Provider store ={store} >
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
