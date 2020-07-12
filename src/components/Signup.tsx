import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Signup: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");
	const { doSignup } = useContext(UserContext);

	return (
		<div className="signup">
			<h2>Signup</h2>
			{success && (
				<p>
					<span className="success">Success!</span> Please log in.
				</p>
			)}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setLoading(true);
					doSignup(email, password, verifyPassword, name);
					setSuccess(true);
				}}
			>
				<div className="form-grid-container">
					<div>
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
					</div>
					<div>
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
					</div>
					<div>
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
					</div>
					<div>
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
					</div>
					<div>
						<button type="submit">Signup</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Signup;
