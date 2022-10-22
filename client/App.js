import "./app.css";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
//App.js will hold header & habit selector

const App = () => {
    //what hooks will we need? 
    return (
        <div className="forBG">
            <>
            <div className="headertest">This is where the header will go in the fragment</div>
            <Routes>
                <Route path='/' element={
                    <>
                        <h1>This will contain the Habit Selector</h1>
                        <h2>On button click from ^, this will have to render checkin component</h2>
                    </>
                } />
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