const db = require('../db/dbConnection');

const habitController = {};

const formatDate = dateObj => {
  //converts date object to this format: '2022/09/22 06:00' (ex)
  const timeStamp = new Date(); //Oi, Remember that date object month is 0 based, so "09" is October
  let hours = timeStamp.getHours().toString();
  let day = timeStamp.getDate().toString();
  let month = timeStamp.getMonth().toString();
  const year = timeStamp.getFullYear().toString();
  if (day.length < 2) day = `0${day}`;
  if (month.length < 2) month = `0${month}`;
  return `${year}/${month}/${day} ${hours}:00`;
};

const calculateDayDiff = (oldDate, newDate) => {
  //calculates difference down to the day & hour between formatted dates innit
  //returns an object!
  //format: (ex) '2022/09/22 06:00'
  const oldDateDay = Number(oldDate[8] + oldDate[9]);
  const newDateDay = Number(newDate[8] + newDate[9]);

  const oldDateMonth = Number(oldDate[5] + oldDate[6]);
  const newDateMonth = Number(newDate[5] + newDate[6]);

  const oldDateHour = Number(oldDate[11] + oldDate[12]);
  const newDateHour = Number(newDate[11] + newDate[12]);

  const hourDifference = newDateHour - oldDateHour;
  const daysDifference = newDateDay - oldDateDay;
  const monthDifference = newDateMonth - oldDateMonth;

  console.log('DIFFERENCE', oldDateDay, newDateDay);
  return {
    days: daysDifference + monthDifference * 30,
    hours: hourDifference,
  };
};

habitController.getHabit = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const queryString = 'SELECT * FROM habits h WHERE h.owner_id = $1;';
    const habitValues = [userId];
    const { rows } = await db.query(queryString, habitValues);

    const { quit_timestamp } = rows[0];
    console.log('QUIT TS', quit_timestamp);

    const now = formatDate(new Date());

    const dayDiff = calculateDayDiff(quit_timestamp, now); //does the math via helper function

    res.locals.habit = {
      ...rows[0],
      quitLength: dayDiff, //appends a property 'quitLength' object to habit object
    };
    return next();
  } catch (error) {
    return next({
      status: 401,
      message: {
        err: `'${error.message}`,
      },
      log: `Error occured in habitController.getHabit - ${error.message}  `,
    });
  }
};

habitController.createHabit = async (req, res, next) => {
  try {
    const { userId, habitName } = req.body;
    const nowTimeStamp = formatDate(new Date());

    const insertString =
      'INSERT INTO habits (owner_id, habit_name, quit_timestamp, has_daily_checkin, streak_count)\
        VALUES($1, $2, $3, $4, $5) RETURNING *';
    const values = [userId, habitName, nowTimeStamp, true, 0];

    const { rows } = await db.query(insertString, values);

    res.locals.habit = {
      ...rows[0],
      quitLength: {
        days: 0,
        hours: 0,
      }, //appends a property 'quitLength' object to habit object
    };
    return next();
  } catch (err) {
    return next({
      status: 401,
      message: {
        err: `'${error.message}`,
      },
      log: `Error occured in habitController.createHabit - ${error.message}  `,
    });
  }
};
// In order to make the has_daily_checkin field reset to false every 24 hours: we must
// implement an EVENT in the database (preferably in the createHabit middleware).
//
// CREATE EVENT reset
//     ON SCHEDULE
//       EVERY 1 HOUR     // database event runs every hour
//         DO
// UPDATE habits 
// SET has_daily_checkin = false 
// WHERE time < date_sub(now(),interval 24 HOUR) //interval for update is 24 hours
//   AND (has_daily_checkin = true) ;


// Updates streak and sets has_daily_checkin to true;
habitController.checkIn = async (req, res, next) => {
  try{
    const {userId} = req.body;
    const getHabitString = 'SELECT * FROM habits h WHERE h.owner_id = $1';
    const val = [userId];
    const { firstRows } = await db.query(getHabitString, val);  //gets habits data of user to access current streak_count
    const {streak_count} = firstRows[0];

    const checkInString = 'UPDATE habits\
     SET has_daily_checkin = $1, streak_count = $2\
     WHERE owner_id = $3 RETURNING *;';
     const values = [true, streak_count + 1 , userId];
     const { rows } = await db.query(checkInString, values); //updates the habits data of user


     const now = formatDate(new Date());
     const { quit_timestamp } = rows[0];
     const daysDiff = calculateDayDiff(quit_timestamp, now); //calculating quitLength again

     res.locals.checkedIn = { //returns habits data object with quitLength property appended
      ...rows[0],
      quitLength: daysDiff

     }
  }catch(err){
    return next({
      status: 401,
      message: {
        err: `${err.message}`,
      },
      log: `Error in habitController checkIn middleware function - ${err.message}`,
    })
  }
}

// Resets the user's quit timestamp when they 'cave in' on a habit
habitController.resetHabit = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const nowTimeStamp = formatDate(new Date());
    const updateString =
      'UPDATE habits\
    SET quit_timestamp = $1, streak_count = $2\
    WHERE owner_id = $3 RETURNING *;';
    const values = [nowTimeStamp, 0, userId];

    const { rows } = await db.query(updateString, values);
    res.locals.reset = {
      ...rows[0],
      quitLength: {
        days: 0,
        hours: 0,
      },
    };
    return next();
  } catch (error) {
    return next({
      status: 401,
      message: {
        err: `'${error.message}`,
      },
      log: `Error occured in habitController.resetHabit - ${error.message}  `,
    });
  }
};

//New Day
//format: (ex) '2022/09/22 06:00'
habitController.newDay = async (req, res, next) => {
  try{
    const { userId } = req.body;

    const updateString = 'UPDATE habits\
    SET has_daily_checkin = $1\
    WHERE owner_id = $2 RETURNING *;';
    const values = [false, userId];
    let { rows } = await db.query(updateString, values);
    
    const { quit_timestamp } = rows[0];
    const newDay = Number(quit_timestamp[8] + quit_timestamp[9]) - 1;
    const newTimeStamp = `${quit_timestamp.slice(0, 7)}/${newDay}${quit_timestamp.slice(10)}`;
    // console.log(newTimeStamp);
    
    const updateAgainString = 'UPDATE habits\
    SET quit_timestamp=$1\
    WHERE owner_id=$2 RETURNING *;';
    const val = [newTimeStamp, userId];
    const results = await db.query(updateAgainString, val);

    res.locals.habit = {
      ...results.rows[0]
    }
    return next()
  }catch (err){
    return next ({
      status: 401,
      message: {
        err: `${err.message}`
      },
      log: `Error in habitController newDay middleware - ${err.message}`
    });
  }
}

module.exports = habitController;
