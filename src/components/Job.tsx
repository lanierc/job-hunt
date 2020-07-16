import React, { useContext } from "react";
import { JobContext } from "../contexts/JobContext";

interface IJob {
	title: string;
	company: string;
	date_posted: {};
	date_applied: {};
	active: boolean;
	scam: boolean;
	ghosted: boolean;
	feedback: string;
	direct_posting: boolean;
	posting_url: string;
	positive: boolean;
	contact_name: string;
	contact_email: string;
}

const Job: React.FC = () => {
	const id: string = window.location.pathname.replace("/jobs/", "");
	const { jobs } = useContext(JobContext);
	const index = jobs.findIndex((job) => {
		return job._id.$oid === id;
	});
	const job = jobs[index];
	if (job !== undefined) {
		console.log("running");
		return (
			<h2>
				{job.title} @ {job.company}
			</h2>
		);
	}

	return null;
};

export default Job;
