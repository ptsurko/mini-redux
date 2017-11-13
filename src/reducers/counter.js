
import createSelector from './../mini-redux/createSelector'

export default (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else {
    return state
  }
}

export const counterSelector = (state) => state.counter

export const doubleCounterSelector = createSelector(
  counterSelector,
  counter => counter * 2
)
