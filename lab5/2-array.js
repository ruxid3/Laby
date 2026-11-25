'use strict';

const array = () => {
  const items = [];
  const arr = (index) => items[index];
  arr.push = (value) => items.push(value);
  arr.pop = () => items.pop();
  return arr;
};

module.exports = { array };
