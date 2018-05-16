import compose from './compose';
// The middleware can now:
// 1) Pass the action on to the next part of the pipeline using next(action)
// 2) Send an action to the start of the pipeline with store.dispatch()
// 3) Access the state using store.getState()
// or anything else it wants to do!

// TODO: Should wrap createStore method
const applyMiddleware = (...middlewares) => (store) => {
  let newDispatch;
  const newStore = {
    ...store,
    dispatch: (...args) => newDispatch(...args),
  };
  newDispatch = compose(
    ...middlewares.map((middleware) => middleware(newStore))
  )(store.dispatch);

  return newStore;
};

export default applyMiddleware;
