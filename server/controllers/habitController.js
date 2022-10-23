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

// Resets the user's quit timestamp when they 'cave in' on a habit
habitController.resetHabit = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const nowTimeStamp = formatDate(new Date());
    const updateString =
      'UPDATE habits\
    SET quit_timestamp = $1, streak_count = $2\
    WHERE owner_id = $3 RETURNING *';
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

module.exports = habitController;
