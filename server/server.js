const express = require('express');
const path = require('path');
const usersRouter = require('./routes/usersRouter');
const groupsRouter = require('./routes/groupsRouter');
const choresRouter = require('./routes/choresRouter');

const app = express();

app.use(express.json());

// Logs all incoming request
app.use('*', (req, res, next) => {
  console.log(`
  #######\n
  URL: ${req.method} ${req.url}\n
  Params: ${JSON.stringify(req.params)}\n
  Body: ${JSON.stringify(req.body)}
  Req: ${req}
  #######
  `);
  next();
});

// serve everything from the build folder
app.use('/build', express.static(path.join(__dirname, '../client/build')));

// will send any users request to our users router
app.use('/api/users', usersRouter);

// will send any groups request to our users groupsRouter
app.use('/api/groups', groupsRouter);
app.use('/api/groups', groupsRouter);

// will send any chores request to our users choresRouter
app.use('/api/chores', choresRouter);

// serve index.html to any get request on the path '/'
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html')));

// 404 error handler
app.use('/*', (req, res) => {
  res.status(404).send('Error: This page does not exist!');
});

// global error handler
app.use('/', (err, req, res, next) => {
  const defaultErr = {
    log: 'Global error handler caught an error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, err };
  res.status(errorObj.status).json(errorObj.message);
});

// Starts the server on port 3000
app.listen(3000, (err) => {
  if (err) console.log('Error setting up server');
  console.log('Choreify server running and ready to work on port 3000:)');
});

module.exports = app;
