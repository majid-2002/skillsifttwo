"use client";
import { SiMusicbrainz } from "react-icons/si";
import { BsCashStack } from "react-icons/bs";
import { serverURL } from "@/utils/util";
import React, { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Params = {
	params: {
		jobId: string
	}
}


export default function Page({ params: { jobId } }: Params) {

	const [job, setJob] = React.useState<any>({});

	const getJob = async () => {
		const config = {
			method: "POST",
			url: `${serverURL}/job/by-id`,
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json"
			},
			data: {
				jobId: jobId
			}
		};

		axios(config)
			.then(async (response) => {
				setJob(response.data);
			})
	}

	useEffect(() => { getJob() }, [])

	const skill = [
		"Programming Languages",
		"Web Development",
		"Database Management",
		"Cloud Computing",
		"Cybersecurity",
		"Networking",
		"DevOps",
		"Artificial Intelligence and Machine Learning",
		"Agile Methodology",
		"Problem Solving and Debugging",
	];

	const [loading, setLoading] = React.useState<boolean>(false);

	const applyJob = async () => {
		setLoading(true);
		const config = {
			method: "POST",
			url: `${serverURL}/job/apply`,
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json"
			},
			data: {
				jobId: jobId
			}
		};

		axios(config)
			.then(async (response) => {
				setLoading(false);
				toast.success("Job Applied Successfully!");
				getJob();
			}).catch((err) => {
				setLoading(false);
				toast.error("Error Applying Job!");
			})
	}

	return (
		<div className="bg-white w-full h-full px-4 overflow-auto ">
			<div className="md:text-5xl text-3xl font-extrabold mt-4 p-3 md:p-5">
				{job?.title}
			</div>
			<div className="md:text-3xl text-xl font-semibold opacity-60 p-3 md:px-5 ">
				{job?.companyName}
			</div>
			<div className="md:flex">
				<div className="w-full">
					<div className="md:text-2xl text-lg max-w-[1100px] text-justify  font-semibold opacity-90 p-3 md:px-5 ">
						{job?.description}
					</div>
					<div className="hidden w-full md:block">
						<div className="w-full md:text-3xl text-xl  font-semibold p-3 md:px-5 md:flex mt-10 mb-20 flex-col">
							<div className="flex mb-10">
								{" "}
								<BsCashStack
									className="opacity-60 mr-1"
									size={30}
								/>{" "}
								<span className="opacity-60">Salary : </span>{" "}
								<span className="opacity-90">₹ {job?.salary}</span>
							</div>
							<div className="flex">
								<button
									type="button"
									className={"min-w-[30vh] btn btn-primary btn-lg " + (loading || job.applied ? "opacity-50" : "")}
									onClick={() => applyJob()}
								>
									{job.applied ? "Already Applied" : "Apply Now"}
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="min-w-[30vw]">
					<div className="md:text-3xl text-xl font-semibold opacity-60 p-3 md:px-5 flex">
						<SiMusicbrainz className="opacity-90 mr-1" size={30} />{" "}
						Skill Required{" "}
					</div>
					{job?.skillsRequired?.map((item: string, index: number) => (
						<li
							className=" md:text-3xl text-xl font-semibold opacity-90 p-3 md:px-5 flex"
							key={index}
						>
							 {item}
						</li>
					))}
				</div>
			</div>

			<div className="md:hidden items-center block md:text-3xl text-xl  font-semibold p-3 md:px-5 sm:flex sm:items-center mt-10 mb-20">
				<div className="flex">
					<div className="flex">
						<BsCashStack className="opacity-60 mr-1" size={30} />{" "}
						<span className="opacity-60">Salary : </span>{" "}
						<span className="opacity-90">₹ {job?.salary}</span>
					</div>
					<button
						type="button"
						className="text-white ml-4 sm:ml-7 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-2 py-2 mr-2 mb-2  "
					>
						Apply Now !
					</button>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}
