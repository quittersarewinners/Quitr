const db = require('../db/dbConnection');
const bcrypt = require('bcrypt');


const userController = {};
//ITTERATION GROUP
userController.getUser = async (req, res, next) => {
  try{
    const {username, password} = req.body;
    // const hashed = await bcrypt.compare(password, hash, function(err, result){
    //   if(result) console.log('match')
    //   else console.log('no match')
    // }) 
    const queryString = `SELECT * FROM users WHERE username = '${username}';`;
    if(!username){
      res.locals.user = false;
      return next();
    }
    // const values = [username]; // req.body.username
    const findUser = await db.query(queryString);
    console.log('aaa: ', findUser.rows[0].password);
    console.log('PASS', password)
    const compare = await bcrypt.compare(password, findUser.rows[0].password)
    console.log('COMPARE', compare)
    if(compare){
      res.locals.user = findUser.rows[0];
    }
    else {
      res.locals.user = false;
    }
    return next();
    } catch (err) {
    return next({
      log: 'err get user',
    })
  } 

}
  
// ITTERATION GROUP
userController.createUser = async (req, res, next) => {
 try{ const {name, username, password} = req.body;
  const query = `SELECT username FROM users WHERE username = '${username}'`
  const locate = await db.query(query);
   console.log('locate', locate.rows[0])
  // if (await db.query(query).rows[0]) {
  //   return next({
  //     log: 'username exists',
  //     message: {
  //       message: 'username already exists'
  //     }
  //   })
  // }
  const saltRounds = 10;
  await bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
      const queryText = `INSERT INTO users (name, username, password) VALUES ('${name}', '${username}', '${hash}') RETURNING *;`;
 const newUser = await db.query(queryText)
 //console.log('USER', newUser.rows)
 res.locals.userInfo = newUser
      return next();
    })

    })
} catch(err) {
  return next({
    log: 'error in createUser',
    message: {
      err: err
      }
    });
  // const pswd = password;
  //const query = `INSERT INTO users (name, username, password) VALUES ('${req.body.name}', '${req.body.username}', '${req.body.password}')`;
 
    
  };

};

/*
userController.getUser = async (req, res, next) => {
  console.log('req.query', req.query)
  try {
    const { userId } = req.query;
    const queryString = 'SELECT * FROM users WHERE user_id = $1;';
    const values = [userId];
    const { rows } = await db.query(queryString, values);
    res.locals.user = rows[0];

    return next();
  } catch (error) {
    return next({
      status: error.status,
      message: {
        err: error.message,
      },
      log: `Error in userController getUser middleware - ${error.log}`,
    });
  }
};
*/

userController.getFact = async (req, res, next) => {
  try {
    const { userId, factId } = req.query;
    console.log('BODY', req.query);

    const str = `day_${factId}`;
    const queryString = 'SELECT * FROM facts f WHERE f.fact_id = $1;';
    const values = [str];
    const { rows } = await db.query(queryString, values);
    console.log(rows[0]);
    res.locals.fact = rows[0];

    return next();
  } catch (error) {
    return next({
      status: 400,
      message: {
        err: error.message,
      },
      log: `Error in userController getUser middleware - ${error.log}`,
    });
  }
};
// Insert Queries for facts table:
//  'INSERT INTO Facts (day_1) VALUES ('Your oxygen levels begin to return to normal, whilst nicotine and carbon monoxide levels in your blood decrease by over 50%');';
//  'INSERT INTO Facts (day_2) VALUES ('You should start to notice an improved sense of taste and smell. As nicotine levels become depleted, the side effects of nicotine withdrawal such as anxiety and irritability might start to creep in.');';
//  'INSERT INTO Facts (day_3) VALUES ('Your lungs begin to relax and breathing should be easier. Nicotine is completely eliminated from the body and as a result nicotine withdrawal symptoms will have reached their peak.');';
//  'INSERT INTO Facts (day_7) VALUES ('The average smoker will begin to notice a reduction in the number of nicotine cravings experienced in a day (you’re getting there!)');';
//  'INSERT INTO Facts (day_14) VALUES ('Your circulation starts to improve. You may notice that physical activity becomes a lot easier. You’ll be free of the addiction and any psychological effects of withdrawal should have ended.');';

module.exports = userController;
