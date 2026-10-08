'use strict';

const countTypesInArray = (arr) => {
  const count = {};
  for (const item of arr) {
    const type = typeof item;
    if (count[type] === undefined) {
      count[type] = 0;
    }
    count[type]++;
  }
  return count;
};

module.exports = { countTypesInArray };