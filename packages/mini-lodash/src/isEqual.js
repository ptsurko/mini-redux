import isArray from './isArray';
import isObject from './isObject';
import isNull from './isNull';
import isUndefined from './isUndefined';

const isEqual = (obj1, obj2) => {
  if ((obj1 === obj2) ||
    (isNull(obj1) && isNull(obj2)) ||
    (isUndefined(obj1) && isUndefined(obj2))) {
    return true;
  }

  if (isArray(obj1) && isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }

    for (let i = 0; i < obj1.length; i += 1) {
      if (!isEqual(obj1[i], obj2[i])) {
        return false;
      }
    }

    return true;
  } else if (isObject(obj1) && isObject(obj2)) {
    const keys = Object.keys(obj1);
    if (keys.length !== Object.keys(obj2).length) {
      return false;
    }

    for (let i = 0; i < keys.length; i += 1) {
      if (!isEqual(obj1[keys[i]], obj2[keys[i]])) {
        return false;
      }
    }

    return true;
  }
  return false;
};

export default isEqual;
