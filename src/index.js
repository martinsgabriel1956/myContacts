const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello World!');
});

const serverStartedMessage = () => console.log('Server started on port: 3000');

app.listen(3000, serverStartedMessage);
