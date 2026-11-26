'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All arguments must be functions');
    }
  }
  return (x) => {
    let result = x;
    for (const fn of fns) result = fn(result);
    return result;
  };
};

module.exports = { pipe };
