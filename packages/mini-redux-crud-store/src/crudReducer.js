import { combineReducers } from '@ptsurko/mini-redux';
import { isEqual } from '@ptsurko/mini-lodash';
import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
  FETCH_ONE,
  FETCH_ONE_SUCCESS,
  FETCH_ONE_FAILURE,
} from './actionTypes';

const INITIAL_STATE = {
  byId: {},
  collections: [],
  actionStatus: {},
};

const collectionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COLLECTION: {
      const collection = state.find((c) => isEqual(c.params, action.payload.params));
      const newCollectionItem = {
        params: action.params,
        isLoading: true,
      };
      return collection ?
        state.map((c) => (c === collection ? newCollectionItem : c)) :
        state.concat([newCollectionItem]);
    }
    case FETCH_COLLECTION_SUCCESS: {
      const collection = state.find((c) => isEqual(c.params, action.payload.params));
      const updatedCollectionItem = {
        ...collection,
        isLoading: false,
        ids: action.payload.data.map(({ id }) => id),
      };
      return state.map((c) => (c === collection ? updatedCollectionItem : c));
    }
    case FETCH_COLLECTION_FAILURE: {
      const collection = state.find((c) => isEqual(c.params, action.payload.params));
      const updatedCollectionItem = {
        ...collection,
        isLoading: false,
        ids: null,
        error: action.payload.error,
      };
      return state.map((c) => (c === collection ? updatedCollectionItem : c));
    }
    default:
      return state;
  }
};

const byIdReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_SUCCESS: {
      return action.payload.data.reduce((result, dataItem) => {
        result[dataItem.id] = {
          isLoading: false,
          data: dataItem,
        };
        return result;
      }, { ...state });
    }
    case FETCH_ONE:
      return {
        ...state,
        [action.payload.id]: {
          isLoading: true,
        },
      };
    case FETCH_ONE_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          isLoading: false,
          data: action.payload.data,
        },
      };
    case FETCH_ONE_FAILURE:
      return {
        ...state,
        [action.payload.id]: {
          isLoading: false,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
};

const modelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
    case FETCH_COLLECTION_SUCCESS:
    case FETCH_COLLECTION_FAILURE:
    case FETCH_ONE:
    case FETCH_ONE_SUCCESS:
    case FETCH_ONE_FAILURE:
      return combineReducers({
        byId: byIdReducer,
        collections: collectionsReducer,
      })(state, action);
    default:
      return state;
  }
};

const crudReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
    case FETCH_COLLECTION_SUCCESS:
    case FETCH_COLLECTION_FAILURE:
    case FETCH_ONE:
    case FETCH_ONE_SUCCESS:
    case FETCH_ONE_FAILURE:
      return combineReducers({
        [action.payload.model]: modelReducer,
      })(state, action);
    default:
      return state;
  }
};

export default crudReducer;
