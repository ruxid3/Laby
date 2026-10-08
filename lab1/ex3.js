'use strict';

const inc = (num) => {
  num.n++;
};

const num = { n: 5 };
inc(num);
console.dir(num);