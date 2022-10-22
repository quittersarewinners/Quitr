const db = require('../db/dbConnection');

const userController = {};


userController.getUser = async (req, res, next) => {
  try {
    const { userId } = req.query;
    const queryString = 'SELECT * FROM users WHERE user_id = $1;';
    const values = [userId];
    const { rows } = await db.query(queryString, values);
    res.locals.user = rows[0];

    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = userController;
