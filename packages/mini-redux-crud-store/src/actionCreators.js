import {
  FETCH_ONE,
  FETCH_ONE_SUCCESS,
  FETCH_ONE_FAILURE,
  FETCH_COLLECTION,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
} from './actionTypes';

const fetchRecord = (model, id, path, params, opts = { method: 'get' }) => ({
  type: FETCH_ONE,
  payload: {
    id,
    model,
    success: FETCH_ONE_SUCCESS,
    failure: FETCH_ONE_FAILURE,
    path,
    params,
    opts,
  },
});

const fetchCollection = (model, path, params, opts = { method: 'get' }) => ({
  type: FETCH_COLLECTION,
  payload: {
    model,
    success: FETCH_COLLECTION_SUCCESS,
    failure: FETCH_COLLECTION_FAILURE,
    path,
    params,
    opts,
  },
});

export {
  fetchRecord,
  fetchCollection,
};
