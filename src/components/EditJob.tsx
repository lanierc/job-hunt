import React, { useState } from "react";
import axios from "axios";

interface IEditProps {
	title: string;
	company: string;
	datePosted: Date | null;
	dateApplied: Date | null;
	contactName: string;
	contactEmail: string;
	status: string;
	postingUrl: string;
	directPosting: boolean;
	feedback: string;
	setEdit(arg0: boolean): any;
	fetchData: () => void;
}

const EditJob = (props: IEditProps) => {
	return <h2>Edit Job</h2>;
};

export default EditJob;
