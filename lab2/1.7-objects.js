'use strict';

const calculate = () => {
  const result = []; 
  for (let i = 0; i < 10; i++) {
    const sq = square(i);  
    const cb = cube(i);      
    const avg = average(sq, cb); 
    result.push({ number: i, square: sq, cube: cb, average: avg });
  }
  return result;
}
module.exports = { calculate };