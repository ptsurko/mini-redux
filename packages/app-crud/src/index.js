import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  loggerMiddleware,
  // thunkMiddleware,
  Provider,
} from '@ptsurko/mini-redux';
import { crudMiddleware, crudReducer } from '@ptsurko/mini-redux-crud-store';
import counter from './reducers/counter';
import App from './components/App';

const CUSTOMER_1 = { id: 1, name: 'Hank', age: 30, sex: 'Male' };
const CUSTOMER_2 = { id: 2, name: 'Emma', age: 40, sex: 'Female' };
const CUSTOMER_3 = { id: 3, name: 'Brad', age: 35, sex: 'Male' };
const CUSTOMER_4 = { id: 4, name: 'Lee', age: 20, sex: 'Male' };

const API_DATA = {
  'customers/1': CUSTOMER_1,
  'customers': [CUSTOMER_1, CUSTOMER_2, CUSTOMER_3, CUSTOMER_4],
};

const apiClient = {
  get: (path, params) => {
    console.log(`API CALL path:'${path}', method:'get', params:'${JSON.stringify(params)}'`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path in API_DATA) {
          resolve({ data: API_DATA[path] });
        } else {
          reject(new Error('No Data'));
        }
      }, 1000);
    });
  },
};

const store = createStore(
  combineReducers({
    counter,
    models: crudReducer,
  }),
  { counter: 1 },
  applyMiddleware(
    crudMiddleware(apiClient),
    loggerMiddleware,
  ),
);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'),
);
