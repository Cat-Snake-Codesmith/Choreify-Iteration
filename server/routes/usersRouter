const express = require('express');

const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

// create a rout for getting all users info
usersRouter.get('/', usersController.getUsers, (req, res) => {
  res.status(200).json(res.locals.payload);
});

// create a rout for posting new user info
usersRouter.post('/', usersController.postNewUser, (req, res) => {
  console.log('sending back: ', res.locals.payload);
  res.status(200).json(res.locals.payload);
});

module.exports = usersRouter;
