

// TODO: Enhancers should wrap whold createStore method
const createStore = (reducer, initialState, enhancer) => {
  let state = initialState;
  let listeners = [];
  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((l) => l());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return (listener) => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const store = {
    getState,
    dispatch,
    subscribe,
  };

  return enhancer ? enhancer(store) : store;
};

export default createStore;
