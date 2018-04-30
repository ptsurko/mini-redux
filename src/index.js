import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './mini-redux/createStore';
import combineReducers from './mini-redux/combineReducers';
import applyMiddleware from './mini-redux/applyMiddleware';
import loggerMiddleware from './mini-redux/middlewares/loggerMiddleware';
// import thunkMiddleware from './mini-redux/middlewares/thunkMiddleware';
import Provider from './mini-redux/Provider';
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
