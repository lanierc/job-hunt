import React, { createContext, useContext, useState } from "react";

interface IJobContext {
	loading: boolean;
	success: boolean;
	error: string;
}

export const JobContext = createContext<IJobContext>({
	loading: false,
	success: false,
	error: "",
});

const JobContextProvider: React.FC = (props) => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	return (
		<JobContext.Provider value={{ loading, success, error }}>
			{props.children}
		</JobContext.Provider>
	);
};

export default JobContextProvider;
