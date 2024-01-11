/* eslint-disable operator-linebreak */
/* eslint-disable camelcase */
/* eslint-disable quotes */
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
  const { title, description, due_date, assignees, group } = req.body;

  const values = [title, description, due_date, assignees, group];

  // hard coded data
  const testValues = ['feed cat', 'give turkey wet food', '1/10/2024', ['Amy Yang', 'Yiting Xiao'], 'Codesmith'];

  const queryStringCreateChore =
  `INSERT INTO chores `
  + `(title, description, due_date, assignees, group) `
  + `VALUES ($1, $2, $3, $4, $5)`;

  // check if assignees passed in are already in assignees table
  // check ids associated with members in array, if members don't match
  
  const findAssigneeID = `SELECT * FROM assignees WHERE `

  
  // populate chore table with info passed in req.body
  
  // pass the params into the function that will insert them in the query
  // then insert them into the database using db.query
  db.query(queries.createChore, values)
    .then((data) => {
      if (data.rows) {
        res.locals.newChore = data; // may need to see what this function actually returns
        next();
      } else {
        next({ err: 'Problem creating new chore in database' });
      }
    });
};

module.exports = choreController;

// old code

  // paramaterize the query
  // console.log(req.body);
  // const arr = [title, description, group_id, chore_status, due_date, assigner_id,
  // created_date] = req.body;
  // console.log(arr);

// hardcoded a chore because could not receive from client side 
// const arr = ['feed the cat', 'feed the cat her favorite cat food', 1, 'assigned', 'end of the week', 1, (new Date()).toLocaleString('en-US')];

//const checkAssigneeQuery = `SELECT id FROM assignees WHERE EXISTS (SELECT id FROM assignees WHERE id := @user_id)`;
