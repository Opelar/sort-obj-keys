module.exports = sortObjKeys
module.exports.default = sortObjKeys

const toString = {}.toString

function sortObjKeys(obj) {
  if (isObject(obj)) {
    const _obj = {};
    Object.keys(obj)
      .sort()
      .forEach(key => {
        _obj[key] = isObject(obj[key]) ? sortObjKey(obj[key]) : obj[key];
      });
    return _obj;
  }
  if (isArray(obj)) {
    return obj.sort();
  }
  return obj;
}

function isArray(val) {
  return Array.isArray ? Array.isArray(val) : toString.call(val) === '[object Array]'
}

function isObject(val) {
  return toString.call(val) === '[object Object]'
}
