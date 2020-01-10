import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';
import App from './App';
import { Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(

<Provider store ={store}>
<Router history={history}>
<App />
</Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
