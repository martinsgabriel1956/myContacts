require('express-async-errors');
const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

const serverStartedMessage = () => console.log('Server started on port: 3000');

app.listen(3000, serverStartedMessage);
