/* eslint-disable arrow-body-style */
/* eslint-disable indent */
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
  const addUser = `
  INSERT INTO users (id, name) VALUES ($1) RETURNING *;
  `;

  // query to add user
  db.query(addUser, values)
    .then((data) => {
      console.log("data from query ", data);
      if (data.rowCount >= 1) {
        // want to change res.locals name to something more semantic like 'userID'
        res.locals.payload = data.rows[0];
        next();
      } else {
        next({ err: "Problem creating new user in database" });
      }
    }).catch((error) => {
      return next(error);
    });
};

module.exports = usersController;


// code to check with exist operator; non functional

// check if user in db
// const checkUserQuery = `SELECT id FROM users WHERE EXISTS (SELECT id FROM users WHERE id = ${user_id})`;
// db.query(checkUserQuery)
// .then((response) => console.log(response.rows));