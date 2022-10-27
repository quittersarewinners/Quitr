import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


// async function newDay() {
//   await axios.post('/api/habit/newDay', { userId: 1 });
// }

//handleClick={} should be in button
function RightInfoBody() {
  return (
    <div className='rightInfoBody'>
      <h1>How are you feeling today?</h1>
      <ul>
        <li>Chewing gum</li>
        <li>'Smoking' air</li>
        <li>Reading two pages</li>
        <li>Lollipop time</li>
      </ul>
      <Link to='/'>
        <button onClick={newDay}>New Day</button>
      </Link>
    </div>
  );
}

export default RightInfoBody;