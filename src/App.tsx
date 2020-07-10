import React from "react";
import "./App.css";
import UserContextProvider from "./contexts/UserContext";
import Signup from "./components/Signup";

function App() {
	return (
		<div className="App">
			<UserContextProvider>
				<div className="container">
					<Signup />
				</div>
			</UserContextProvider>
		</div>
	);
}

export default App;
