'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 3.14, null];

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

console.dir(countTypesInArray(arr));