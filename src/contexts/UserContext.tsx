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
	doLogin: (email: string, password: string) => void;
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
	doLogin: (email: string, password: string) => {
		return null;
	},
});

const UserContextProvider: React.FC = (props) => {
	const [user, setUser] = useState("");

	const doSignup = (
		email: string,
		password: string,
		verifyPassword: string,
		name: string
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

	const doLogin = (email: string, password: string): void => {
		axios({
			method: "POST",
			url: "/api/users/login",
			data: {
				email,
				password,
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<UserContext.Provider value={{ user, doSignup, doLogin }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
