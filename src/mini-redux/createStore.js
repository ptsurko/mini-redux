const createStore = (reducer) => {
  let state
  let listeners = []

  const getState = () => {
    return state
  }
  const dispatch = (action) => {
    state = reducer(state, action)

    listeners.forEach(l => l())
  }
  const subscribe = (listener) => {
    listeners.push(listener)

    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  dispatch({ type: '@INIT' })

  return {
    getState,
    dispatch,
    subscribe
  }
}

export default createStore
