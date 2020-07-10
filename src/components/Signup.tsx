import React, { useState, useContext } from "react";

const Signup: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");
	const [name, setName] = useState("");

	return (
		<div className="signup">
			<h2>Signup</h2>
			<form>
				<label htmlFor="email">Email Address:</label>
				<input
					type="email"
					name="email"
					placeholder="Email Address"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					value={email}
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					value={password}
				/>
				<label htmlFor="verifyPassword">Verify Password:</label>
				<input
					type="password"
					name="verifyPassword"
					placeholder="Verify Password"
					onChange={(e) => {
						setVerifyPassword(e.target.value);
					}}
					value={verifyPassword}
				/>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					placeholder="Name"
					onChange={(e) => {
						setName(e.target.value);
					}}
					value={name}
				/>
			</form>
		</div>
	);
};

export default Signup;
