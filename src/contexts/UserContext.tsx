import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

interface IUser {
	user: string;
	doSignup: (
		email: string,
		password: string,
		verifyPassword: string,
		name: string
	) => void;
}

export const UserContext = createContext<IUser>({
	user: "",
	doSignup: (
		email: string,
		password: string,
		verifyPassword: string,
		name: string
	) => {
		return null;
	},
});

const UserContextProvider: React.FC = (props) => {
	const [user, setUser] = useState("");

	const doSignup = (
		email: string,
		password: String,
		verifyPassword: String,
		name: String
	): void => {
		//check for matching password
		if (password === verifyPassword) {
			axios({
				method: "POST",
				url: "/api/users/signup",
				data: {
					email,
					password,
					name,
				},
			}).then((res: {}) => {
				console.log(res);
			});
		}
	};

	return (
		<UserContext.Provider value={{ user, doSignup }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
