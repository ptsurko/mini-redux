import { createSelector } from '@ptsurko/mini-redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = () => {
  return { type: INCREMENT };
};

export const asyncIncrement = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const asyncDecrement = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrement());
    }, 1000);
  };
};


export default (state = 0, action) => {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
};

export const counterSelector = (state) => state.counter;

export const doubleCounterSelector = createSelector(
  counterSelector,
  (counter) => counter * 2,
);
