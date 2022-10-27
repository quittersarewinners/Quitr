import React, { useState, useEffect } from 'react';

function UpcomingInfo(props) {

// Your oxygen levels begin to return to normal, whilst nicotine and carbon monoxide levels in your blood decrease by over 50%

  return ( 
    <div className="upcomingInfo">
      <p>What you may expect in the next few days:</p>
      {/* {} */}
      <ul>
        <li>Your heart rate is {2*props.daysOff}% better</li>
        {/* <li>Your pulse is {fact}% better</li>
        <li>{fact}</li> */}
      </ul>
    </div>
  );
}

export default UpcomingInfo;