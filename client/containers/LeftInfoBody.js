import React, { useEffect, useState } from 'react';
import QuitInfo from '../components/QuitInfo';
import UpcomingInfo from '../components/UpcomingInfo';
import HealthBenefits from '../components/HealthBenefits';
import Calendar from 'react-calendar';
import moment from 'moment';

function LeftInfoBody(props) {
  console.log('LEFTINFOPROPS', props);
  const [value, onChange] = useState(new Date());
  console.log('THIS IS VALUE : ', value);
  const todayDate = new Date();
  const dayDifference = moment(todayDate).diff(value, 'days');
  return (
    <div className="leftInfoBody">
      {/* <h1>Left side</h1> 
      {props.habit ? props.habit.habit_name : null} */}
      <div className='left-up'>
        <QuitInfo habit={dayDifference} />
       
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
