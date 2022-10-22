const path = require('path');
const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //parses request body
const userRouter = require('./routes/userRouter');
const habitRouter = require('./routes/habitRouter');
const sessionRouter = require('./routes/sessionRouter');

app.use('/api/user', userRouter);
app.use('/api/habit', habitRouter);

//Create catch-all error handler

//Create a global error handler

app.listen(PORT, () => {
  console.log('Server is now listening on Port ', PORT);
});

module.exports = app; //Do we need this? yes we do
