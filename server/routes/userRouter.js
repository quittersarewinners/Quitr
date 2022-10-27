const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const habitController = require('../controllers/habitController');

// access user object: {fname, lname, uname, pswrd}
// access fact according to quitLength.days -> returns a string


// router.get('/login', //middleware here) (req, res, next => {
//   res.status(200).json(//res.locals.?)
// })


router.get('/fact', userController.getFact, (req, res, next) => {
  res.status(200).json(res.locals.fact);
});
router.get('/', userController.getUser, (req, res, next) => {
  res.status(200).json(res.locals.user);
});

router.post('/signup', userController.createUser, habitController.createHabit, (req, res, next) => {
  const sendBack = {...res.locals.userInfo.rows[0], ...res.locals.habits.rows[0]}
  console.log('SENDBACK', sendBack)
 return res.status(201).json(sendBack)
});

router.post('/login', userController.getUser, habitController.getHabit, (req, res, next) => {
  //console.log('LOCALS+++>===', res.locals.user)
  const sendBack = {...res.locals.row, ...res.locals.user}
  return res.status(201).json(sendBack)
});

module.exports = router;
