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
  const todayDate = new Date();
  const currState = moment(todayDate).diff(props.user.start_date, 'days');
  console.log('currState :', currState)
  // const [dayDifference, setDayDifference] = useState(currState);

  // console.log('THIS IS DAYDIFF :', dayDifference)
  //hardcoded start date -> it should change when we get the start date from DB
  
  //Using moment library to do the math from the start date to the current date
  //we should be accsesing the all the user information from the DB
  console.log('THIS SHOULD BE USERINFO :', props.user);
  const dayDifference = moment(todayDate).diff(props.user.start_date, 'days');
  // console.log('this is props.user', props.user.start_date);


  const userObj = {
    username: props.user.username,
    start_date: value,
    user_id: props.user.user_id
  };



  useEffect(() => {
    const getStartDay = async () => {
      const res = await axios.patch('/api/habit', userObj );


   


    };
    getStartDay().catch((err) => console.log(err));

  }, [value]);
  
  
  return (
    <div className="leftInfoBody">
      {/* <h1>Left side</h1> 
      {props.habit ? props.habit.habit_name : null} */}
      <div className='left-up'>
        <QuitInfo daysOff={dayDifference} value={value}/>
       
        <UpcomingInfo daysOff={dayDifference}/>
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
