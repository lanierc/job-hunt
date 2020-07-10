import React, { useState, createContext, useEffect } from "react";

interface IUser {
	user: String;
}

export const UserContext = createContext<IUser>({ user: "" });

const UserContextProvider: React.FC = (props) => {
	const [user, setUser] = useState("");

	return (
		<UserContext.Provider value={{ user }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
