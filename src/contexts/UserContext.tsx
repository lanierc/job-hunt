import React, { useState, createContext, useEffect } from "react";

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
		console.log(email, password, verifyPassword, name);
	};

	return (
		<UserContext.Provider value={{ user, doSignup }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
