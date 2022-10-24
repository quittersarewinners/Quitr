import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';

function ReadyToQuitr() {
	return <p>Are you ready to QUITR?</p>;
}

function HabitOptions() {
	return (
		<select className="bad-habits">
			<option value="smoking">smoking</option>
			<option value="also smoking">also smoking</option>
			<option value="smoking as well">smoking as well</option>
			<option value="still smoking">still smoking</option>
		</select>
	);
}

function QuitButton() {
	return <button className="ready-to-quit">I'm ready to quit!</button>;
}

function HabitSelector() {
	return (
		<div className="habit-selector">
			<ReadyToQuitr /> <HabitOptions /> <QuitButton />
		</div>
	);
}

export default HabitSelector;