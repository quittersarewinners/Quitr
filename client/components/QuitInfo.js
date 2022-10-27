import React from 'react';

function QuitInfo(props) {

  // {props.habit ? props.habit.quitLength.days : null}
  return (
    <div className="quitInfo">
      <p>
        Congratulations! You have quit for: {props.daysOff} days!!!
      </p>
    </div>
  );
}

export default QuitInfo;
