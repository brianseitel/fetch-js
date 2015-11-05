'use strict';

exports = function (obj, key, _default) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }

  if (typeof key == 'object') {
    var k = key.shift();
    if (key.length > 0) {
      return exports.fetch(obj[k], key);
    } else {
      return obj[k];
    }
  } else {
    if (obj[key] != null) {
      return obj[key];
    }
  }

  return _default ? _default : null;
}