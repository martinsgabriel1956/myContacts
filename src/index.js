const express = require('express');
const router = require('./routes');

const app = express();
app.use(router);

const serverStartedMessage = () => console.log('Server started on port: 3000');

app.listen(3000, serverStartedMessage);
