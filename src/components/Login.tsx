import React, { useState, useContext } from "react";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="login">
			<h2>Login</h2>
			<form>
				<div className="form-grid-container">
					<div>
						<label htmlFor="email">Email Address:</label>
						<input
							type="text"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							name="email"
							placeholder="Email Address"
						/>
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input
							type="text"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							name="password"
							placeholder="Password"
						/>
					</div>
					<div>
						<button type="submit">Login</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
