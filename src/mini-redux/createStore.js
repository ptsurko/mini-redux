
// TODO: Enhancers should wrap whold createStore method
const createStore = (reducer, initialState, enhancer) => {
  let state = initialState;
  let listeners = [];

  const getState = () => {
    return state;
  };

  let dispatch = (action) => {
    state = reducer(state, action);

    listeners.forEach((listener) => listener());

    return action;
  };

  dispatch = enhancer(dispatch, getState);

  const subscribe = (newListener) => {
    listeners.push(newListener);

    return () => {
      listeners = listeners.filter((listener) => listener !== newListener);
    };
  };

  dispatch({ type: '@INIT' });

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export default createStore;
