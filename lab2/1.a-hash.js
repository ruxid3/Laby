'use strict';

const phonebook = {
  'George Washington': '111-111-1111',
  'Marcus Aurelius': '+380445554433',
  'Ivan Franko': '+380671234567',
  'Taras Shevchenko': '+380509876543',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
