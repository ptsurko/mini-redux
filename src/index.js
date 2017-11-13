////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// 1. Implement <Provider> to make the store accessible on context to the rest
//    of the components rendered below it
// 2. Implement `connect`. It should:
//   a) Return a function that takes a component
//   b) The new function should return a new component that wraps the component
//      passed to it
//   c) The new component, when rendered, will pass state from
//      the store as props to your App component. You'll use the function
//      passed to `connect` to map store state to component props
//
// Got extra time?
//
// 3. Remove the "visibility: hidden" from the contact list in App
// 4. Migrate the contacts from component state into the store
// 5. Handle creating contacts with `dispatch`
import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './mini-redux/createStore'
import combineReducers from './mini-redux/combineReducers'
import Provider from './mini-redux/Provider'
import counter from './reducers/counter'
import App from './components/App'

const store = createStore(combineReducers({
  counter
}))

ReactDOM.render((
  <Provider store={store}>
    <App dispatch={store.dispatch}/>
  </Provider>
), document.getElementById('root'))
