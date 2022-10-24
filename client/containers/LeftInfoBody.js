import React from 'react';
import QuitInfo from '../components/QuitInfo';
import UpcomingInfo from '../components/UpcomingInfo';
import HealthBenefits from '../components/HealthBenefits';

function LeftInfoBody(props) {
  console.log('LEFTINFOPROPS', props);
  return (
    <div className="leftInfoBody">
      <h1>Left side</h1>
      {props.habit ? props.habit.habit_name : null}
      <QuitInfo habit={props.habit} />
      <UpcomingInfo />
      {props.fact ? props.fact.fact : null}
      <HealthBenefits fact={props.fact} />
    </div>
  );
}

export default LeftInfoBody;
