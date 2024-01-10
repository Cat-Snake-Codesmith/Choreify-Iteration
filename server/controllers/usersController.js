/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable camelcase */
const db = require("../models/choreifyModels");
const queries = require("../models/queries");

const usersController = {};

usersController.getUsers = (req, res, next) => {
  db.query(queries.getAllUsers).then((data) => {
    if (data) {
      res.locals.payload = data.rows;
      next();
    } else {
      next({ err: "Problem fetching users from database" });
    }
  });
};

usersController.postNewUser = (req, res, next) => {
  console.log("req.body in controller", req.body);
  const { user_id, name } = req.body;

  const values = [user_id, name];

  // query needed to add user to db
  const addUser = `INSERT INTO users (id, name) VALUES ($1, $2) RETURNING *`;

  // info needed to add user_id to assignees table
  //const addAssignee = `INSERT INTO assignees (user_id) VALUES (@user_id)`;

  // check if user in db
  const checkUser = `SELECT id FROM users WHERE EXISTS (SELECT id FROM users WHERE id = 'Lug6eYldSSZif4bac55VwbO3EYm1')`;
  db.query(checkUser)
    .then((response) => console.log(response));

  if (db.query(checkUser)) {
    console.log('user already in database');
  } else {
    // add user to db
    db.query(addUser, values)
      .then((userData) => {
        console.log("data from user query ", userData);
        if (userData.rowCount >= 1) {
          // want to change res.locals name to something more semantic like 'userID'
          res.locals.payload = userData.rows[0];
          
          // add assignee to db
          //db.query(addAssignee);
          
          next();
        } else {
          next({ err: "Problem creating new user in database" });
        }
      });
  }
};

module.exports = usersController;
