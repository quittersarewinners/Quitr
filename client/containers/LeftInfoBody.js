import React from 'react';
import QuitInfo from '../components/QuitInfo';
import UpcomingInfo from '../components/UpcomingInfo';
import HealthBenefits from '../components/HealthBenefits';

function LeftInfoBody(props) {
  console.log('LEFTINFOPROPS', props);
  return (
    <div className="leftInfoBody">
      {/* <h1>Left side</h1> 
      {props.habit ? props.habit.habit_name : null} */}
        <div className='left-up'>
          <QuitInfo habit={props.habit} />
          <UpcomingInfo />
        </div>
        <div className='up-down'>
           {/* {props.fact ? props.fact.fact : null} */}
            <HealthBenefits day={props.habit} fact={props.fact} />
        </div>
     </div>
  );
}

export default LeftInfoBody;
