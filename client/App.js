import './styles/app.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import CheckIn from './components/CheckIn';
import InformationContainer from './containers/InformationContainer'
import HeaderBar from "./components/HeaderBar";
import HabitSelectorContainer from "./containers/HabitSelectorContainer"


const App = () => {
    //what hooks will we need? 
    const [firstTime, setFirstTime] = useState(true)
    const [initialLoad, setInitialLoad] = useState(true)
    const [hasCheckedIn, setHasCheckedIn] = useState(false)

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //on useEffect, will need to check if user has checked in today. will involve call on backend & state
        //to maintain
    useEffect(() => {
        //need function to get user data - will invoke within useEffect
        async function getUserData(){
            const { data } = await axios.get('/api/habit/1');
            if(data) setFirstTime(false)
            console.log(data)
        }
        getUserData();
        //if data is undefined, HabitSelectorContainer should render, if it does exist, it should not.
    }, []);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return (
        <div className="forBG">
            <>
            <HeaderBar />
            <Routes>
                <Route path='/' element={
                    <>
                        {firstTime ? <HabitSelectorContainer setter={setFirstTime} /> : null}
                        {!firstTime ? <CheckIn firstTime={firstTime} /> : null}
                    </>
                } />
                <Route path='/info' element={<InformationContainer />} />
            </Routes>
            </>
        </div>
    )
}


export default App