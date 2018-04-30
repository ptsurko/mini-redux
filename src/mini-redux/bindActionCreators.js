
const isFunction = (obj) => typeof obj === 'function';
const isObject = (obj) => obj === Object(obj);

const wrapDispatch = (actionCreator, dispatch) => (params) => dispatch(actionCreator(params));

const bindActionCreators = (actionCreators, dispatch) => {
  if (isFunction(actionCreators)) {
    return wrapDispatch(actionCreators, dispatch);
  } else if (isObject(actionCreators)) {
    return Object.keys(actionCreators).reduce((result, key) => {
      result[key] = wrapDispatch(actionCreators[key], dispatch);
      return result;
    }, {});
  }
};

export default bindActionCreators;
