import React from "react";
import "./App.css";
import UserContextProvider from "./contexts/UserContext";
import Signup from "./components/Signup";
import logo from "./assets/logo.png";

function App() {
	return (
		<div className="App">
			<div className="logo">
				<img src={logo} alt="Job Hunt Logo" />
			</div>
			<UserContextProvider>
				<div className="container">
					<Signup />
				</div>
			</UserContextProvider>
		</div>
	);
}

export default App;
