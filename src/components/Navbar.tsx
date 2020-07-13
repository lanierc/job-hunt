import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Navbar: React.FC = () => {
	const { user } = useContext(UserContext);

	return (
		<div className="navbar">
			<nav>
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					{!user && (
						<>
							<Link to="/login">
								<li>Login</li>
							</Link>
							<Link to="/signup">
								<li>Signup</li>
							</Link>
						</>
					)}
					{user && (
						<>
							<button>
								<li>Logout</li>
							</button>
						</>
					)}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
