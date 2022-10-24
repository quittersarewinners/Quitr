import React from 'react';
import { Link } from 'react-router-dom'

const CheckIn = (props) => {
    return (
        <div className="checkIn">
            {props.firstTime ? <h1>Are you ready to start your commitment?</h1> : <h1>Welcome back! Have you stayed away from your bad habit?</h1>}
            <div className="checkInButtons">
                <Link to='/info'>
                    <button>Yes</button>
                    <button>No</button>
                </Link>
            </div>
        </div>
    )
}

export default CheckIn