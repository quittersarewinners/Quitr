import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// function ReadyToQuitr() {
// 	return <p>Are you ready to QUITR?</p>;
// }

// function HabitOptions() {
//   return (
//     <select className="bad-habits">
//       <option value="smoking" />
//       <option value="also smoking" />
//       <option value="smoking as well" />
//       <option value="still smoking" />
//     </select>
//   );
// }

// function QuitButton() {

// 	return <button onClick={handleClick} className="ready-to-quit">I'm ready to quit!</button>;
// }

function HabitSelector() {
  const handleClick = async () => {
    await axios.post('/api/habit/create', { userId: 1, habitName: 'smoking' });
  };

  return (
    <div className="habit-selector">
    
      <select className="bad-habits">
        <option>Smoking</option>
        <option>Coding</option>
        <option>Drinking</option>
        <option>Gaming</option>
        <option>Spending</option>
      </select>
      <Link to="/info">
        <button onClick={handleClick} className="ready-to-quit">
          Choose your bad habit!
        </button>
      </Link>
    </div>
  );
}

export default HabitSelector;
