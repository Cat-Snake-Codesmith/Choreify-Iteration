const express = require('express');

const choresRouter = express.Router();

const choreController = require('../controllers/choreController');

// create a route for get chores that fetchs a list of all the chores that have been created
choresRouter.get('/', choreController.getChores, (req, res) => {
  console.log('back to api');
  res.status(200).json(res.locals.choreList);
});

// create a route for sending a new chore's data to the database
choresRouter.post('/', choreController.createChore, (req, res) => {
  res.status(200).json(res.locals.newChore);
});

module.exports = choresRouter;
