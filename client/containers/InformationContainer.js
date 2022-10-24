import React, { useEffect, useState } from 'react';
import InformationHeader from '../components/InformationHeader';
import LeftInfoBody from './LeftInfoBody';
import RightInfoBody from '../components/RightInfoBody';
import axios, { AxiosHeaders } from 'axios';

//information header will require the use of pulling from db - username and habit quit time
const InformationContainer = props => {
  const [habit, changeHabit] = useState();
  const [user, changeUser] = useState();
  const [fact, setFact] = useState();

  useEffect(() => {
    const getHabit = async () => {
      const habitData = await axios.get('/api/habit/1');
      const userData = await axios.get('/api/user?userId=1');
      const factData = await axios.get(`/api/user/fact?factId=1`);

      changeUser(userData.data);
      changeHabit(habitData.data);
      setFact(factData.data);
    };
    getHabit().catch(err => console.log(err));
  }, []);

  return (
    <>
      <InformationHeader user={user} />
      <div className="infoBody">
        <LeftInfoBody habit={habit} fact={fact} /> <RightInfoBody />
      </div>
    </>
  );
};

export default InformationContainer;
