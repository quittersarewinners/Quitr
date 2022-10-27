import React, { useState, useEffect } from 'react';

function UpcomingInfo(props) {

// Your oxygen levels begin to return to normal, whilst nicotine and carbon monoxide levels in your blood decrease by over 50%

  return ( 
    <div className="upcomingInfo">
      <p>Way to go! These are your major health improvements so far!</p>
      {/* {} */}
      <ul>
        <li>Your heart rate is {1.5 * props.daysOff}% better</li>
        <li>Your oxygen levels are {.89 * props.daysOff} % better</li>
        <li>Your bronchial tubes have started to relax and your breathing should be {2.3 * props.daysOff} % better</li>
        <li>Your bad breath is {3 * props.daysOff} % better</li>
        <li>Your circulation is {0.7 * props.daysOff} % better</li>
      </ul>
    </div>
  );
}

export default UpcomingInfo;