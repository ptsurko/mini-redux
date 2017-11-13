
const areArraysEqual = (array1, array2) => {
  if (array1 === array2) {
    return true
  }

  if (array1.length !== array2.length) {
    return false
  }

  let areEquals = true
  array1.forEach((item, index) => {
    areEquals = areEquals && (array1[index] === array2[index])
  })

  return areEquals
}

const createSelector = (...args) => {
  const computeSelector = args[args.length - 1]
  const inputSelectors = args.slice(0, args.length - 1)

  let cacheStates = []
  let cacheResult = undefined

  return (state, props) => {
    const inputStates = inputSelectors.map(s => s(state, props))

    if (!areArraysEqual(inputStates, cacheStates)) {
      cacheStates = inputStates
      cacheResult = computeSelector(...inputStates)
    }

    return cacheResult
  }
}

const createStructuredSelector = (inputSelectorsMap) => {
  // const
  // for (let key of inputSelectorsMap) {

  // }
}

export default createSelector
