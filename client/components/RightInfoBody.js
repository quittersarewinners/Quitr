import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';


// async function newDay() {
//   await axios.post('/api/habit/newDay', { userId: 1 });
// }

//handleClick={} should be in button
function RightInfoBody() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  // const handleClick = (e) =>{
  //   e.preventDefault();
  //   // console.log(e.target.id);
  //   // let id = e.target.id;
  //   // setIsFlipped{id}(prevState => !prevState);
  //   setIsFlipped((prevState) => !prevState);
  // };

  return (
    <div className='rightInfoBody'>
      <h1>How are you feeling today?</h1>
      <ReactCardFlip isFlipped1={isFlipped1} flipDirection="horizontal">
        <div id="1" onClick={() => setIsFlipped1((prevState) => !prevState)} className="feelingCard">
          I'm feeling great!
        </div>
        <div id="1" onClick={() => setIsFlipped1((prevState) => !prevState)} className="feelingCard">
          That's amazing! How about treating yourself to a nice run or a sweet treat?
        </div>
      </ReactCardFlip>
      <ReactCardFlip isFlipped2={isFlipped2} flipDirection="horizontal">
        <div id="2"  onClick={() => setIsFlipped2((prevState) => !prevState)} className="feelingCard">
          I'm feeling alright...
        </div>
        <div id="2"  onClick={() => setIsFlipped2((prevState) => !prevState)} className="feelingCard">
          That's okay. 
        </div>
      </ReactCardFlip>
      <ReactCardFlip isFlipped3={isFlipped3} flipDirection="horizontal">
        <div id="3" onClick={() => setIsFlipped3((prevState) => !prevState)} className="feelingCard">
          Honestly, not so good.
        </div>
        <div id="3" onClick={() => setIsFlipped3((prevState) => !prevState)} className="feelingCard">
          Hey, that's alright. Here are some resources that might be of use to you, and how about reaching out to a friend?
          <ul>
          <li><a href="https://www.smokitten.com/en/smokitten-le-jeu/"> Smoke Kitten - a game to quit smoking</a></li>
          <li><a href="https://www.lung.org/quit-smoking/join-freedom-from-smoking"> Lung Association</a></li>
            <li><a href="https://www.quitassist.com/helpful-resources.htm?gclid=CjwKCAjw2OiaBhBSEiwAh2ZSP06pAUrv-dqsVapYuHTTa08J4BGVYBCIdHavZKRGA1ubPEvQfhKewRoCLEEQAvD_BwE"> Quit Assist</a></li>
          </ul>

        </div>
      </ReactCardFlip>
    </div>
  ); 
}

export default RightInfoBody;