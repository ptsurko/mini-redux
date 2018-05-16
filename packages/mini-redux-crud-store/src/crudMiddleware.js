
import { FETCH_ONE, FETCH_COLLECTION } from './actionTypes';

const ACTIONS_TO_HANDLE = [FETCH_ONE, FETCH_COLLECTION];

const crudMiddleware = (apiClient) => ({ dispatch }) => (next) => (action) => {
  if (ACTIONS_TO_HANDLE.includes(action.type)) {
    const { success, failure, path, opts, params } = action.payload;
    apiClient[opts.method](path, params)
      .then((result) => {
        dispatch({
          type: success,
          payload: {
            ...action.payload,
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: failure,
          payload: {
            ...action.payload,
            error,
          },
        });
      });
  }
  return next(action);
};

export default crudMiddleware;
