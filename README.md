# My implementation of simple Redux and another supporting libraries.

## Implemented:
- [ ] redux
  - [x] createStore
  - [ ] createStore enhancers
    - Take an existing createStore method as a parameter
    - Return a new createStore method
    - Can return a new store API object that substitutes new versions of store methods
    - Multiple enhancers can be composed together to form a new enhancer
  - [x] combineReducers
  - [ ] bindActionCreators
  - [ ] applyMiddleware - https://redux.js.org/api-reference/applymiddleware
  - [ ] compose
- [x] react-redux
  - [ ] connect
    - [ ] Optimize
  - [x] Provide component
- [ ] recompose
  - [ ] createSelector
  - [ ] createStructuredSelector
- [ ] recompact
- [ ] middleware
  - [ ] loggerMiddleware
  - [ ] thunkMiddleware
  - [ ] promiseMiddleware
  - [ ] simple sagaMiddleware
- [ ] High order components - https://medium.freecodecamp.org/higher-order-components-the-ultimate-guide-b453a68bb851
  - [ ] With props - https://github.com/acdlite/recompose/blob/master/docs/API.md#withprops
- [ ] router
- [ ] something else???
- [ ] "cn" decorator from https://habrahabr.ru/company/alfa/blog/340522/

## Inspiration
 * [You Might Need Redux](http://blog.isquaredsoftware.com/presentations/2017-09-might-need-redux-ecosystem)
 * [БЭМ + React: гибкая архитектура дизайн-системы](https://habrahabr.ru/company/alfa/blog/340522/)
 * [What is the right way to do asynchronous operations in Redux?](https://decembersoft.com/posts/what-is-the-right-way-to-do-asynchronous-operations-in-redux/)
 * [Higher-Order Components: The Ultimate Guide](https://medium.freecodecamp.org/higher-order-components-the-ultimate-guide-b453a68bb851)
