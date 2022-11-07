import React from 'react';

const InformationHeader = (props) => {
  console.log('user: ', props.user);
  // const {first_name} = user;  {props.user ? props.user.first_name  : null} {props.user ? props.user.last_name : null}
  // console.log('user.first_name: ', first_name);
  return (
    <div className="infoHeader">
      <h1>Welcome {props.user} !</h1>
    </div>
  );
};

export default InformationHeader;