import React, { createContext, useContext, useState } from "react";

interface IJobContext {
	loading: boolean;
	success: boolean;
	error: string;
	addJob: (
		title: string,
		company: string,
		datePosted: Date | null,
		dateApplied: Date,
		direct: boolean,
		postingUrl: string,
		contactName: string,
		contactEmail: string
	) => void;
}

export const JobContext = createContext<IJobContext>({
	loading: false,
	success: false,
	error: "",
	addJob: (
		title: string,
		company: string,
		datePosted: Date | null,
		dateApplied: Date,
		direct: boolean,
		postingUrl: string,
		contactName: string,
		contactEmail: string
	) => {
		return null;
	},
});

const JobContextProvider: React.FC = (props) => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const addJob = (
		title: string,
		company: string,
		datePosted: Date | null,
		dateApplied: Date,
		direct: boolean,
		postingUrl: string,
		contactName: string,
		contactEmail: string
	): void => {
		console.log(title);
	};

	return (
		<JobContext.Provider value={{ loading, success, error, addJob }}>
			{props.children}
		</JobContext.Provider>
	);
};

export default JobContextProvider;
