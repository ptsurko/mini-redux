
// The middleware can now:
// 1) Pass the action on to the next part of the pipeline using next(action)
// 2) Send an action to the start of the pipeline with store.dispatch()
// 3) Access the state using store.getState()
// or anything else it wants to do!

// TODO: Should wrap createStore method

const applyMiddleware = (...middlewares) => {
  return (dispatch, getState) => {
    middlewares = middlewares.reverse();
    return function wrappedDispatch(...args) {
      let prevDispatch = dispatch;

      middlewares.forEach((middleware) => {
        prevDispatch = middleware({ dispatch: wrappedDispatch, getState })(prevDispatch);
      });
      return prevDispatch(...args);
    };
  };
};

export default applyMiddleware;
