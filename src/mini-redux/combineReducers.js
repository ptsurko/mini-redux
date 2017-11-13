
const combineReducers = (reducers) => (state = {}, action) => {
  const result = {}
  for (const key in reducers) {
    result[key] = reducers[key](state[key], action)
  }

  return result
}

export default combineReducers
