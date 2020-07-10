import React from "react";
import "./App.css";
import UserContextProvider from "./contexts/UserContext";

function App() {
	return (
		<div className="App">
			<UserContextProvider>
				<header className="App-header">
					<h2>Job Hunt</h2>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</UserContextProvider>
		</div>
	);
}

export default App;
