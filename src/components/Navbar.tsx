import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	return (
		<div className="navbar">
			<nav>
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/login">
						<li>Login</li>
					</Link>
					<Link to="/signup">
						<li>Signup</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
