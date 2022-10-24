const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// access user object: {fname, lname, uname, pswrd}
router.get('/', userController.getUser, (req, res, next) => {
  res.status(200).json(res.locals.user);
});

// access fact according to quitLength.days -> returns a string
router.get('/fact', userController.getFact, (req, res, next) => {
  res.status(200).json(res.locals.fact)
});

module.exports = router;
