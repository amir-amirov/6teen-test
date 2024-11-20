// import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main/Main";
// import Signup from "./components/Signup/Signup";
// import Login from "./components/Login/Login";

// function App() {
// 	const user = localStorage.getItem("token");

// 	return (
// 		<Routes>
// 			{user && <Route path="/" exact element={<Main />} />}
// 			<Route path="/signup" exact element={<Signup />} />
// 			<Route path="/login" exact element={<Login />} />
// 			<Route path="/" element={<Navigate replace to="/login" />} />
// 		</Routes>
// 	);
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const App = () => {
	const [roomName, setRoomName] = useState('sample-room'); // Set a default room name
	const [enteredRoom, setEnteredRoom] = useState(false); // Flag to handle room join process

	useEffect(() => {
		// Handle permissions for camera and microphone (especially in Web)
		if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
			navigator.mediaDevices.enumerateDevices().then(devices => {
				const hasVideo = devices.some(device => device.kind === 'videoinput');
				const hasAudio = devices.some(device => device.kind === 'audioinput');
				if (!hasVideo || !hasAudio) {
					alert('Camera or microphone is not available!');
				}
			});
		}
	}, []);

	// Handle joining the room when the button is clicked
	const handleJoinRoom = () => {
		if (roomName) {
			setEnteredRoom(true);
		}
	};

	return (
		<div style={{ textAlign: 'center', marginTop: 20 }}>
			<JitsiMeeting
				roomName={'YOUR_CUSTOM_ROOM_NAME'}
				getIFrameRef={node => node.style.height = '800px'}
			/>
		</div>
	);
};

export default App;
