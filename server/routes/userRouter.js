const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

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

router.post('/signup', userController.createUser, (req, res, next) => {
  
 return res.status(201).json('signup success')
});

router.post('/login', userController.getUser, (req, res, next) => {
  console.log('LOCALS+++>===', res.locals.user)
  
  return res.status(201).json(res.locals.user)
 });

module.exports = router;
