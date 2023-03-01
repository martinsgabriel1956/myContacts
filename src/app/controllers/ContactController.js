class ContactController {
  index(request, response) {
    response.send('List All Contacts');
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

module.exports = new ContactController();
