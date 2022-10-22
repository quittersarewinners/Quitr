import React from "react";
import { render } from "react-dom";
import logo from '../assets/logo_primary.png';

// const ColoredLogo = () => <img src={}/>;

const Logo = () => {
	return (
		<div className="logo-container">
			<img src={logo}/>
		</div>
	);
};

export default function HeaderBar() {
	render() {
    return (
      <div className="headerBar" backgroundColor="rgb(237,228,233)" marginLeft="0px" marginRight="0px" 
        width="100%" display="flex" justifyContent="center" >

        <Logo />

      </div>
    )
  }
}
