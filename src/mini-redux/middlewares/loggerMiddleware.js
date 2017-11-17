const loggerMiddleware = ({ getState }) => {
  return (next) => {
    return (action) => {
      console.group(action.type);
      console.log('%c prev state', 'color: gray', getState());
      console.log('%c action', 'color: blue', action);

      const result = next(action);

      console.log('%c next state', 'color: green', getState());
      console.groupEnd(action.type);

      return result;
    };
  };
};

export default loggerMiddleware;
