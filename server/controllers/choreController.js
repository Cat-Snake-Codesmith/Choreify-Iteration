/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable camelcase */
const db = require('../models/choreifyModels');
const queries = require('../models/queries');

const choreController = {};

choreController.getChores = (req, res, next) => {
  db.query(queries.getAllChores)
    .then((data) => {
      if (data) {
        // eslint-disable-next-line prefer-destructuring
        res.locals.choreList = data.rows;
        next();
      } else {
        next({ err: 'Problem fetching chores from database' });
      }
    });
};

choreController.createChore = (req, res, next) => {
  // const { title, description, assignees, due_date, group, status } = req.body;

  // const arr = [title, description, assignees, due_date, group, status];
  const testArr = ['feed my cat', 'feed the turkey wet food', ['Amy Yang', 'Yiting Xiao'], '1/11/2024', 'Codesmith', 'Not Started'];

  const createChoreQuery = `INSERT INTO chores 
  (title, description, assignees, due_date, group, status)
  VALUES ($1, $2, $3, $4, $5, $6)`;

  // pass the params into the function that will insert them in the query
  // then insert them into the database using db.query
  db.query(createChoreQuery, testArr)
    .then((data) => {
      if (data.rows) {
        
        // pass through res.locals assignees, group, and status info
          // potentially store in array? object?

        res.locals.newChore = data; // may need to see what this function actually returns
        next();
      } else {
        next({ err: 'Problem creating new chore in database' });
      }
    });
};

module.exports = choreController;

// // paramaterize the query
  // console.log(req.body);
  // const arr = [title, description, group_id, chore_status, due_date, assigner_id,
  // created_date] = req.body;
  // console.log(arr);

//// hardcoded a chore because could not receive from client side
//const arr = ['feed the cat', 'feed the cat her favorite cat food', 1, 'assigned', 'end of the week', 1, (new Date()).toLocaleString('en-US')];