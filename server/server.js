const path = require('path');
const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //parses request body
const userRouter = require('./routes/userRouter');
const habitRouter = require('./routes/habitRouter');
const sessionRouter = require('./routes/sessionRouter');

app.use('/api/user', userRouter); //routes requests to /api/user to userRouter

app.use('/api/habit', habitRouter); //routes requests to /api/habit to habitRouter

//Create catch-all error handler for unkown routes
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for'))

//Create a global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middle error',
    status: 500,
    message: { err: 'An error occurred' }
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Server is now listening on Port ', PORT);
});

module.exports = app; //Do we need this? yes we do
