const phonebook = [
  { name: 'Taras Shevchenko', phone: '380968865932' },
  { name: 'Jane Smith', phone: '098-765-4321' },
  {name: 'Ivan Franko', phone: '555-555-5555' },
  {name: 'George Washington', phone: '111-111-1111' },
];
const findPhoneByName = (name) => {
  for (const contact of phonebook) {
    if (contact.name === name) {
      return contact.phone;
    }
  }
  return null;
};

module.exports = { phonebook, findPhoneByName };