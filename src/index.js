import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import {WeaponReducer} from './reducers/weaponReducer'
import { Provider } from 'react-redux'

const store = createStore(WeaponReducer);

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
