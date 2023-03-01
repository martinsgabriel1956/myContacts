const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Gabriel Martins',
    email: 'gabriel.martins@email.com',
    phone: '99999-9999',
    categoryId: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
