import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import flightReducer from './reducer/flightReducer';

const store = createStore(flightReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

