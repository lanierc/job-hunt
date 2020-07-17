import React, { useState, useEffect } from "react";
import axios from "axios";

const Job: React.FC = () => {
	const id: string = window.location.pathname.replace("/jobs/", "");
	const [job, setJob] = useState<any>({});

	const fetchData = () => {
		axios.get(`/api/jobs/job/${id}`).then((res: any) => {
			setJob(res.data.data);
		});
	};

	useEffect(() => {
		fetchData();
	}, [id]);

	let dt1: Date | null = null;
	let dt2: Date | null = null;
	if (job.date_posted !== undefined) {
		dt1 = new Date(job.date_posted.$date);
	}
	if (job.date_applied !== undefined) {
		dt2 = new Date(job.date_applied.$date);
	}
	let datePosted: string = "";
	let dateApplied: string = "";
	if (dt1) {
		datePosted = dt1.toLocaleString("en-us");
	}
	if (dt2) {
		dateApplied = dt2.toLocaleString("en-us");
	}
	const datePostedArr: Array<string> | null = datePosted.split(",") || null;
	const dateAppliedArr: Array<string> = dateApplied.split(",");

	if (job !== undefined) {
		return (
			<div className="single-job">
				<h2>
					{job.title} @ {job.company}
				</h2>
				<p>
					<span>Date Posted:</span> {dt1 && datePostedArr[0]}
				</p>
				<p>
					<span>Date Applied:</span> {dateAppliedArr[0]}
				</p>
				<p>
					<span>Job Posting:</span>{" "}
					{!job.direct_posting ? (
						<a href={job.posting_url} target="_blank">
							Go to Posting
						</a>
					) : (
						"Direct Referral"
					)}
				</p>
				<p>
					<span>Contact:</span>{" "}
					{job.contact_email !== "" ? (
						<a href={`mailto:${job.contact_email}`}>{job.contact_name}</a>
					) : job.contact_name !== "" ? (
						job.contact_name
					) : null}
				</p>
				<p>
					<span>Status:</span> {job.status}
				</p>
				<p>
					<span>Feedback:</span> {job.feedback && job.feedback}
				</p>
			</div>
		);
	}

	return null;
};

export default Job;
