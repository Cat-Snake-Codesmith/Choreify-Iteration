const express = require('express');

const groupController = require('../controllers/groupController');

const groupsRouter = express.Router();

// creates a route for getting all group info
groupsRouter.get('/', groupController.getGroups, (req, res) => {
  res.status(200).json(res.locals.groups);
});

groupsRouter.post('/', groupController.createNewGroup, (req, res) => {
  console.log(123);
  res.status(200).json(res.locals.newGroup);
});

module.exports = groupsRouter;
