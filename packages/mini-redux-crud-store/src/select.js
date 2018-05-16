import { isEqual } from '@ptsurko/mini-lodash';
import { FETCH_ONE, FETCH_COLLECTION } from './actionTypes';

// What does the return value of select() look like?
// {
//   [NO] otherInfo,   # if response was sent in a data envelope, provides the other keys (e.g. pagination data)
//   data,        # if isLoading is false, then this will hold either a collection of records, or a single record
//   isLoading,   # boolean: false if data is ready and no error occurred while loading data
//   needsFetch,  # boolean: true if you still need to dispatch a fetch action (iselect(...).fetch)
//   [NO] fetch        # action to dispatch, in case `needsFetch` is true
// }
const select = (action, models) => {
  const { model, params } = action.payload;
  switch (action.type) {
    case FETCH_ONE: {
      const record = models[model] ? models[model].byId[action.payload.id] : null;
      return {
        needsFetch: !record,
        isLoading: !!(record && record.isLoading),
        data: record && record.data,
      };
    }
    case FETCH_COLLECTION: {
      const collection = models[model] ?
        models[model].collections.find((c) => isEqual(c.params, params)) :
        null;
      let data = null;
      if (collection && collection.ids) {
        data = collection.ids.map((id) => models[model].byId[id].data);
      }
      return {
        needsFetch: !collection,
        isLoading: !!(collection && collection.isLoading),
        data,
      };
    }
    default:
      return null;
  }
};

export default select;
