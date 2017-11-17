
const wrapActionCreator = (actionCreator, dispatch) => {
  return (...args) => {
    dispatch(actionCreator(...args));
  };
};

const bindActionCreators = (actionCreators, dispatch) => {
  if (typeof actionCreators === 'function') {
    return wrapActionCreator(actionCreators, dispatch);
  }

  return Object.entries(actionCreators).reduce((boundActionCreators, [key, actionCreator]) => {
    boundActionCreators[key] = wrapActionCreator(actionCreator, dispatch);
    return boundActionCreators;
  }, {});
};

export default bindActionCreators;
