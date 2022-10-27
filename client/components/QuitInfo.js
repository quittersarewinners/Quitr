import React from 'react';
import { useState, useEffect } from 'react';

function QuitInfo(props) {
 console.log('this is props.dayoff :',props.daysOff )
 console.log('this is props.newday :',props.newDay )
  return (
    <div className="quitInfo">
      <p>
        Congratulations! You have quit for: {props.daysOff} days!!!
      </p>
    </div>
  );
}

export default QuitInfo;
