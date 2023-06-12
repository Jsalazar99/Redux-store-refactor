import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// imports for Redux store 
import store from './app/store'
// import store from './store';

import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import rootReducer from './reducers'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const store = createStore(rootReducer)

render(
  //<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
