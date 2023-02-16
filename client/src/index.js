import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
//import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'

//const store = configureStore({reducer: Reducers, middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk)})
const store = configureStore({reducer: Reducers, middleware: [thunk]})
//const store = createStore( Reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App/>
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);