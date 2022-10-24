import React from 'react';
import logo from '../assets/logo_primary.png';

// const headerStyles = {
//   backgroundColor: '#3973e6',
//   margin: '0px',
//   padding: '0px',
//   width: '100%',
//   height: '8vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontFamily: 'Open Sans, sans-serif',
//   fontSize: 80,
// };
//style={headerStyles}
const HeaderBar = () => {
  return (
    <>
      <div className='headertest'>
        <img src={logo} alt="logo"/>
      </div>
    </>
  );
};

export default HeaderBar;
