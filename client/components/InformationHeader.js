import React from 'react';

const InformationHeader = (props) => {
    console.log('user: ', props.user);
    // const {first_name} = user;
    // console.log('user.first_name: ', first_name);
    return (
        <div className="infoHeader">
            <h1>Welcome {props.user ? props.user.first_name  : null} {props.user ? props.user.last_name : null}!</h1>
        </div>
    )
}

export default InformationHeader;