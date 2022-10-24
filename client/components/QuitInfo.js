import React from 'react';

function QuitInfo(props) {
  return (
    <div className="quitInfo">
      <p>
        Congratulations! You have quit for:
        {props.habit ? props.habit.quitLength.days : null} days!!!
      </p>
    </div>
  );
}

export default QuitInfo;
