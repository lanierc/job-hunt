import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Home: React.FC = () => {
	const { user } = useContext(UserContext);
	if (user) {
		return (
			<div className="home">
				<h2>Home</h2>
			</div>
		);
	}
	return (
		<div className="home">
			<h2>Welcome to Job Hunt!</h2>
			<p>Track your job applications by registering!</p>
		</div>
	);
};

export default Home;
