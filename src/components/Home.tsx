import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { JobContext } from "../contexts/JobContext";
import Jobs from "./Jobs";

const Home: React.FC = () => {
	const { user } = useContext(UserContext);
	const { jobs } = useContext(JobContext);
	if (user) {
		return (
			<div className="home">
				<h2>Your Applications</h2>
				<div className="job-grid-container">
					<div className="job-grid-row job-grid-header">
						<div>Job Title</div>
						<div>Company</div>
						<div>Date Posted</div>
						<div>Date Applied</div>
						<div>Status</div>
						<div>Details</div>
					</div>
					{jobs.map((job) => (
						<Jobs key={job._id.$oid} job={job} />
					))}
				</div>
			</div>
		);
	}
	return (
		<div className="home">
			<h2>Welcome to Job Hunt!</h2>
			<p>Track your job applications by registering!</p>
		</div>
	);
};

export default Home;
