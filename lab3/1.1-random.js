'use strict'; 

const random = (min, max) => {
  const totalNum = max - min + 1;
  return Math.floor(Math.random() * totalNum) + min; 
};

module.exports = {random};
