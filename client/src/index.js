import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' // Provider going to keep track of the store, global state, allowing you access to that store from anywhere inside of the app.
import { configureStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import App from './App';

const store = configureStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));