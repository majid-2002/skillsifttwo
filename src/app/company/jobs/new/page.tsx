"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverURL } from "@/utils/util";

export default function Page() {
    const [skills, setSkills] = React.useState<string[]>([]);
    const [newSkill, setNewSkill] = React.useState<string>("");
    const fileRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = React.useState<boolean>(false);
    const [progress, setProgress] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(0);
    const [dataTotal, setDataTotal] = useState(0);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [salary, setSalary] = useState<number>(0);
    const [deadline, setDeadline] = useState<string>("");

    const uploadResume = (e: any) => {
        setUploading(true);
        const data = new FormData();
        data.append("file", e.target.files[0]);

        const axiosInstance = axios.create({
            baseURL: `${serverURL}`,
        });

        axiosInstance
            .post("/resume/upload", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (data) => {
                    const newProgress = Math.round(
                        (100 * data.loaded) / (data.total ?? 0)
                    );
                    setProgress(newProgress);
                    setDataLoaded(data.loaded);
                    setDataTotal(data.total ?? 0);
                },
            })
            .then((res) => {
                toast.success("Resume uploaded successfully!");
                // setResumeData(res.data);
                setUploading(false);
            })
            .catch((err) => {
                toast.error("Error uploading resume!");
                setUploading(false);
            });
    };

    const createJob = async () => {
        setUploading(true);
        const config = {
            method: "POST",
            url: `${serverURL}/job/create`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": `application/json`,
            },
            data: {
                "title": title,
                "description": description,
                "salary": salary,
                "deadline": deadline,
                "skillsRequired": skills,
                "location": location
            }
        };

        axios(config)
            .then(async (response) => {
                setUploading(false);
                toast.success("Job created!");
                window.location.href = "/company/jobs";
            })
            .catch((error) => {
                setUploading(false);
                toast.error("Something went wrong!");
            });
    }

    return <div className="max-w-[50vh] w-full h-full p-5 overflow-y-auto">
        <p className="font-bold text-3xl">Create New Job</p>
        <label className="label mt-4">
            <span className="label-text">Upload Job via PDF</span>
        </label>
        <input type="file" onChange={(e) => uploadResume(e)} ref={fileRef} hidden />
        <button onClick={() => {
            if (uploading) return;
            fileRef.current?.click();
        }} className={"btn btn-primary w-full " + (uploading ? "opacity-50" : "")}>
            📄 Upload Job Data PDF
        </button>
        <div className="w-full flex items-center justify-center mt-3">
            <div className="w-full bg-gray-300 h-[2px]"></div>
            <p className="mx-4">OR</p>
            <div className="w-full bg-gray-300 h-[2px]"></div>
        </div>
        <label className="label mt-4">
            <span className="label-text">Job Title</span>
        </label>
        <input
            type="text"
            placeholder="Job Title"
            className="input input-bordered w-full"
            value={title}
            onChange={(x) => setTitle(x.target.value)}
        />
        <label className="label mt-4">
            <span className="label-text">Job Description</span>
        </label>
        <textarea className="textarea textarea-bordered w-full" placeholder="Job Description" value={description}
            onChange={(x) => setDescription(x.target.value)}></textarea>
        <label className="label mt-4">
            <span className="label-text">Location</span>
        </label>
        <input
            type="text"
            placeholder="Job Location"
            className="input input-bordered w-full"
            value={location}
            onChange={(x) => setLocation(x.target.value)}
        />
        <label className="label mt-4">
            <span className="label-text">Salary</span>
        </label>
        <input
            type="number"
            min={1}
            placeholder="Salary"
            className="input input-bordered w-full"
            value={salary}
            onChange={(x) => setSalary(parseInt(x.target.value))}
        />
        <label className="label mt-4">
            <span className="label-text">Required Skills</span>
        </label>
        {
            skills.map((item: any, index: number) => {
                return <label key={index} className="hover:bg-slate-200 badge badge-outline p-4 mr-2 mb-2">{item} <FiX className="ml-2 cursor-pointer" onClick={() => {
                    setSkills((prevSkills) => prevSkills.filter((skill) => skill !== item));
                }} /></label>
            })
        }
        <label onClick={() => setNewSkill("")} htmlFor="addskill_modal" className="cursor-pointer badge bg-primary text-white p-4 mr-2 mb-2"> Add Skill<FiPlus className="ml-2" /></label>
        {/* Add Skill Modal */}
        <input type="checkbox" id="addskill_modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Add Skill</h3>
                    <label htmlFor="addskill_modal" className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </label>
                </div>
                <div className="form-control w-full mt-3">
                    <input type="text" placeholder="Skill" className="input input-bordered w-full" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
                </div>
                <div className="modal-action">
                    <label htmlFor="addskill_modal" className="btn btn-primary w-full" onClick={() => {
                        if (newSkill.length > 0) {
                            setSkills((prevSkills) => [...prevSkills, newSkill]);
                        }
                    }} >Add</label>
                </div>
            </div>
        </div>
        <label className="label mt-4">
            <span className="label-text">Application Deadline</span>
        </label>
        <input
            type="date"
            placeholder="Deadline"
            className="input input-bordered w-full"
            value={deadline}
            onChange={(x) => setDeadline(x.target.value)}
        />
        <button className={"btn btn-primary w-full mt-5 " + (uploading ? "opacity-50" : "")} onClick={() => createJob()}>Create Job</button>
        <ToastContainer />
    </div>
}