# My own implementation of simple Redux and another supporting libraries.

![What I cannot create I do not understand](feynman.png)

## Implemented:
- [ ] redux
  - [x] createStore
  - [x] createStore enhancers
    - Take an existing createStore method as a parameter
    - Return a new createStore method
    - Can return a new store API object that substitutes new versions of store methods
    - Multiple enhancers can be composed together to form a new enhancer
  - [x] combineReducers
  - [x] bindActionCreators
  - [x] applyMiddleware - https://redux.js.org/api-reference/applymiddleware
  - [x] compose
- [x] react-redux
  - [x] connect
    - [ ] Optimize
  - [x] Provide component
- [ ] reselect
  - [ ] createSelector
  - [ ] createStructuredSelector
- [ ] recompose
  - [x] setStatic
  - [x] onlyUpdateForKeys
- [ ] middleware
  - [x] loggerMiddleware
  - [ ] thunkMiddleware
  - [ ] promiseMiddleware
  - [ ] simple sagaMiddleware
  - [ ] simple redux-observable middleware - https://redux-observable.js.org/
    - [ ] Netflix JavaScript Talks - RxJS + Redux + React = Amazing! https://www.youtube.com/watch?v=AslncyG8whg
- [ ] redux-crud-store
  - [x] fetchRecord
    - [ ] error handling
  - [x] fetchCollection
    - [ ] error handling
  - [ ] query
  - [ ] api for custom fetch
    - [ ] bulk create
  - [ ] params in query
- [ ] react-router
- [ ] something else???
- [ ] "cn" decorator from https://habrahabr.ru/company/alfa/blog/340522/

## Inspiration
 * [You Might Need Redux](http://blog.isquaredsoftware.com/presentations/2017-09-might-need-redux-ecosystem)
 * [БЭМ + React: гибкая архитектура дизайн-системы](https://habrahabr.ru/company/alfa/blog/340522/)
 * [What is the right way to do asynchronous operations in Redux?](https://decembersoft.com/posts/what-is-the-right-way-to-do-asynchronous-operations-in-redux/)
 * [Higher-Order Components: The Ultimate Guide](https://medium.freecodecamp.org/higher-order-components-the-ultimate-guide-b453a68bb851)

## Lerna
 * https://github.com/lerna/lerna/issues/1006
 * https://github.com/dmk255/lerna-webpack-example
