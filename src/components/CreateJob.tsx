import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { JobContext } from "../contexts/JobContext";

const CreateJob: React.FC = () => {
	const { loading, success, error, addJob } = useContext(JobContext);
	const [title, setTitle] = useState("");
	const [company, setCompany] = useState("");
	const [datePosted, setDatePosted] = useState<Date | null>(null);
	const [dateApplied, setDateApplied] = useState<Date | null>(
		new Date(Date.now())
	);
	const [direct, setDirect] = useState(false);
	const [postingUrl, setPostingUrl] = useState("");
	const [contactName, setContactName] = useState("");
	const [contactEmail, setContactEmail] = useState("");
	return (
		<div className="create-job">
			<h2>Create a Job Application</h2>
			{success && (
				<p>
					<span className="success">Success!</span> Job published to tracker!
				</p>
			)}
			{error && (
				<p>
					<span className="error">Error:</span> {error}
				</p>
			)}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addJob(
						title,
						company,
						datePosted,
						dateApplied,
						direct,
						postingUrl,
						contactName,
						contactEmail
					);
					setTitle("");
					setCompany("");
					setDatePosted(null);
					setDateApplied(new Date(Date.now()));
					setDirect(false);
					setPostingUrl("");
					setContactName("");
					setContactEmail("");
				}}
			>
				<fieldset>
					<div className="job-form-grid-container">
						<div>
							<label htmlFor="title">Job Title:</label>
							<input
								type="text"
								value={title}
								placeholder="Job title"
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>
						</div>
						<div>
							<label htmlFor="company">Company</label>
							<input
								type="text"
								value={company}
								placeholder="Company"
								onChange={(e) => {
									setCompany(e.target.value);
								}}
							/>
						</div>
						<div>
							<label htmlFor="datePosted">Date Posted:</label>
							<DatePicker
								selected={datePosted}
								onChange={(date) => {
									setDatePosted(date);
								}}
								isClearable
								calendarClassName="calendar"
							/>
						</div>
						<div>
							<label htmlFor="dateApplied">Date Applied:</label>
							<DatePicker
								selected={dateApplied}
								onChange={(date) => {
									setDateApplied(date);
								}}
								isClearable
								calendarClassName="calendar"
							/>
						</div>
						<div>
							<label htmlFor="direct">This was a direct referral.</label>
							<input
								type="checkbox"
								checked={direct}
								onChange={() => {
									setDirect(!direct);
								}}
							/>
						</div>
						<div>
							{!direct && (
								<>
									<label htmlFor="postingUrl">Posting URL:</label>
									<input
										type="text"
										placeholder="Posting URL"
										value={postingUrl}
										onChange={(e) => {
											setPostingUrl(e.target.value);
										}}
									/>
								</>
							)}
						</div>
						<div>
							<label htmlFor="contactName">Contact Name:</label>
							<input
								type="text"
								placeholder="Contact Name"
								value={contactName}
								onChange={(e) => setContactName(e.target.value)}
							/>
						</div>
						<div className="btn-row">
							<label htmlFor="contactEmail">Contact Email:</label>
							<input
								type="text"
								value={contactEmail}
								placeholder="Contact Email"
								onChange={(e) => setContactEmail(e.target.value)}
							/>
						</div>
						<div>
							<button type="submit">Add Job</button>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default CreateJob;
