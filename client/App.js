import "./app.css";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
//App.js will hold header & habit selector
import CheckIn from './components/CheckIn';
import InformationContainer from './containers/InformationContainer';


const App = () => {
    //what hooks will we need? 
    const [firstTime, setFirstTime] = useState(true)

    //header bar shouldnt need any functionality
    //on useEffect, will need to check if user has checked in today. will involve call on backend & state
        //to maintain most likely for now
    
    //if user is logged in, habit selector should not show. for now with 1 user, will always show
    //in the check-in component, will need button click to navigate to the informational component


    return (
        <div className="forBG">
            <>
            <div className="headertest">This is where the header will go in the fragment</div>
            <Routes>
                <Route path='/' element={
                    <div className="selector">
                        <h1>This will contain the Habit Selector, dependant on user signed in(fornow always show)</h1>
                        <CheckIn firstTime={firstTime} />
                    </div>
                } />
                <Route path='/info' element={<InformationContainer />} />
            </Routes>
            </>
        </div>
    )
}



            {/* header component will go here <header.js />*/}
            {/* React router routes will go here, dont have to setup routes until later.*/}
            {/* -Habit selector will come first */}
            {/* -Then Check in component */}
            {/* -Then display component (do we seperate components within display?) */}





export default App