import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';
//import rootReducer  from './reducers/UserReducer';
import { userReducer } from'../src/reducers/UserReducer';
import { Provider } from 'react-redux';

import { loadState , saveState } from './LocalStorage';
import flightReducer from './reducers/FlightReducer';

const persistedState = loadState();

//combining reducer
const reducer = combineReducers({
  user : userReducer,
  flight : flightReducer 
})
//creating redux store
let store = createStore(reducer, persistedState);
//console.log('store.getState()', store.getState());

//subscribe to the store
store.subscribe(()=>saveState(store.getState()));

ReactDOM.render(
 <Provider store = {store}>
  <BrowserRouter><App /></BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
