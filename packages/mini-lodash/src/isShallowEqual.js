import isShallowEqualByKeys from './isShallowEqualByKeys';

const isShallowEqual = (obj1, obj2) => {
  if (!obj1 || !obj2) {
    return false;
  }
  if (obj1 === obj2) {
    return true;
  }

  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length) {
    return false;
  }

  return isShallowEqualByKeys(obj1, obj2, keys);
};

export default isShallowEqual;
