const isShallowEqualByKeys = (obj1, obj2, keys) => {
  if (!obj1 || !obj2) {
    return false;
  }

  return keys.every((key) => obj1[key] === obj2[key]);
};

export default isShallowEqualByKeys;
