require('express-async-errors');
const express = require('express');
const router = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors);
app.use(router);
app.use(errorHandler);

const serverStartedMessage = () => console.log('Server started on port: 3001');

app.listen(3001, serverStartedMessage);
