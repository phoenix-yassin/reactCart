import React from 'react';
import ReactDOM from 'react-dom';

import './css/bootstrap.css';
import './css/bootstrap-grid.min.css';
import './css/Cart.css';
import './css/index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

import reducer from './reducers';
import App from './CartApp';
import { getAllItems } from './actions';

const logger = createLogger();
const middleware = [thunk, logger];
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

store.dispatch(getAllItems())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);