import React, { useEffect, useState } from 'react';
import QuitInfo from '../components/QuitInfo';
import UpcomingInfo from '../components/UpcomingInfo';
import HealthBenefits from '../components/HealthBenefits';
import Calendar from 'react-calendar';
import moment from 'moment';
import axios from 'axios';

function LeftInfoBody(props) {
  // setting state for start date from the calendar
  const [value, onChange] = useState(new Date());
  //hardcoded start date -> it should change when we get the start date from DB
  const todayDate = new Date();
  //Using moment library to do the math from the start date to the current date
  //we should be accsesing the all the user information from the DB
  console.log('THIS SHOULD BE USERINFO :', props.user);
  const dayDifference = moment(todayDate).diff(value, 'days');
  // console.log('this is props.user', props.user.start_date);

  const userObj = {
    username: props.user,
    start_date: value
  };

  useEffect(() => {
    const getStartDay = async () => {
      const res = await axios.patch('/api/user', userObj );
      console.log('this is the response', res);
    };
    getStartDay().catch((err) => console.log(err));

  }, [value]);
  
  
  return (
    <div className="leftInfoBody">
      {/* <h1>Left side</h1> 
      {props.habit ? props.habit.habit_name : null} */}
      <div className='left-up'>
        <QuitInfo daysOff={dayDifference} />
       
        <UpcomingInfo />
      </div>
      <div className='up-down'>
        {/* {props.fact ? props.fact.fact : null} */}
        <Calendar onChange={onChange} value={value}/>
        <HealthBenefits day={props.habit} fact={props.fact} />
      </div>
    </div>
  );
}

export default LeftInfoBody;
