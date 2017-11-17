
const areArraysEqual = (array1, array2) => {
  if (array1 === array2) {
    return true;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  let areEquals = true;
  array1.forEach((item, index) => {
    areEquals = areEquals && (array1[index] === array2[index]);
  });

  return areEquals;
};

export const createSelector = (...args) => {
  const computeSelector = args[args.length - 1];
  const inputSelectors = args.slice(0, args.length - 1);

  let cacheStates = [];
  let cacheResult;

  return (state, props) => {
    const inputStates = inputSelectors.map((selector) => selector(state, props));

    if (!areArraysEqual(inputStates, cacheStates)) {
      cacheStates = inputStates;
      cacheResult = computeSelector(...inputStates);
    }

    return cacheResult;
  };
};

export const createStructuredSelector = (inputSelectorsMap) => {
  const keyToSelectorPairs = Object.entries(inputSelectorsMap);
  const selectors = keyToSelectorPairs.map((pair) => pair[1]);
  return createSelector(...selectors, (...args) => {
    return args.reduce((result, selectorResult, index) => {
      const key = keyToSelectorPairs[index][0];
      result[key] = selectorResult;
      return result;
    }, {});
  });
};

export default createSelector;
