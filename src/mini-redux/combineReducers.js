const combineReducers = (reducers) => (state = {}, action) => {
  return Object.entries(reducers).reduce((result, [key, reducer]) => {
    result[key] = reducer(state[key], action);

    return result;
  }, {});
};

export default combineReducers;
