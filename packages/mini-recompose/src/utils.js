// TODO: get rid of
const shallowEqualByKeys = (obj1, obj2, keys) => {
  if (!obj1 || !obj2) {
    return false;
  }

  return keys.every((key) => obj1[key] === obj2[key]);
};

const shallowEqual = (obj1, obj2) => {
  if (!obj1 || !obj2) {
    return false;
  }

  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length) {
    return false;
  }

  return shallowEqualByKeys(obj1, obj2, keys);
};

export {
  shallowEqual,
  shallowEqualByKeys,
};
