import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';

function ReadyToQuitr() {
	return <p>Are you ready to QUITR?</p>;
}

function HabitOptions() {
	return (
		<select className="bad-habits">
			<option value="smoking" />
			<option value="also smoking" />
			<option value="smoking as well" />
			<option value="still smoking" />
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