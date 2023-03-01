const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Gabriel Martins',
    email: 'gabriel.martins@email.com',
    phone: '99999-9999',
    categoryId: v4(),
  },
  {
    id: v4(),
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '99999-9999',
    categoryId: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const findContact = (contact) => contact.id === id;
      const contact = contacts.find(findContact);
      resolve(contact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      const contactsFiltered = contacts.filter((contact) => contact.id !== id);
      contacts = contactsFiltered;
      resolve();
    });
  }
}

module.exports = new ContactRepository();
