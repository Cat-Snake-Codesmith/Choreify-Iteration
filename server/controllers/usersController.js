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
  const { user_id } = req.body;

  const values = [user_id];
  const queryString = `INSERT INTO users (id) VALUES ($1)`;

  db.query(queryString, values)
    .then((data) => {
      console.log("data from query ", data);
      if (data.rowCount >= 1) {
        res.locals.payload = data.rows[0];
        next();
      } else {
        next({ err: "Problem creating new user in database" });
      }
    });
};

module.exports = usersController;
