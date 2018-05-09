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
import counter from './reducers/counter';
import App from './components/App';

const store = createStore(
  combineReducers({ counter }),
  { counter: 1 },
  applyMiddleware(loggerMiddleware)
  // applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'),
);
