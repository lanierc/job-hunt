import React from "react";

interface IJobProps {
	job: any;
}

const Jobs = (props: IJobProps) => {
	return <div className="jobs-grid-row">{props.job.title}</div>;
};

export default Jobs;
