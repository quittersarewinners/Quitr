import React from 'react';
import logo from '../assets/logo_primary.png';

const headerStyles = {
  backgroundColor: '#3973e6',
  margin: '0px',
  padding: '0px',
  width: '100%',
  height: '8vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: 80,
};

const HeaderBar = () => {
  return (
    <>
      <div style={headerStyles}>Quitr</div>
    </>
  );
};

export default HeaderBar;
