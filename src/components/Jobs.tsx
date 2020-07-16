import React from "react";
import { Link } from "react-router-dom";

interface IJobProps {
	job: any;
}

const Jobs = (props: IJobProps) => {
	const dt1: Date = new Date(props.job.date_posted.$date);
	const dt2: Date = new Date(props.job.date_applied.$date);
	const datePosted: string = dt1.toLocaleString("en-us");
	const dateApplied: string = dt2.toLocaleString("en-us");
	const datePostedArr: Array<string> = datePosted.split(",");
	const dateAppliedArr: Array<string> = dateApplied.split(",");
	return (
		<div className="job-grid-row">
			<div>{props.job.title}</div>
			<div>{props.job.company}</div>
			<div>{datePostedArr[0]}</div>
			<div>{dateAppliedArr[0]}</div>
			<div></div>
			<div>
				<Link to={`/jobs/${props.job._id.$oid}`}>{">>"}</Link>
			</div>
		</div>
	);
};

export default Jobs;
