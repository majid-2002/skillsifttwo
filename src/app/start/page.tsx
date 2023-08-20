"use client";
import { serverURL } from "@/utils/util";
import axios from "axios";
import { useRef, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
    const [progress, setProgress] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(0);
    const [dataTotal, setDataTotal] = useState(0);
    const [uploading, setUploading] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);

    const [newSkill, setNewSkill] = useState("");

    const blankResumeData = {
        name: "",
        email: "",
        phone: "",
        gender: "male",
        qualification: "",
        college: "",
        specialization: "",
        skills: [],
        yearOfGraduation: "",
    };

    const blankAtsData = {
        score: 0.0,
        remarks: []
    };

    const [resumeData, setResumeData] = useState<any>(blankResumeData);
    const [atsData, setAtsData] = useState<any>(blankAtsData);

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
                setResumeData(res.data.data);
                setAtsData(res.data.ats);
                setUploading(false);
            })
            .catch((err) => {
                toast.error("Error uploading resume!");
                setUploading(false);
            });
    };

    const saveResumeData = async () => {
        setUploading(true);
        const config = {
            method: "POST",
            url: `${serverURL}/resume/save-data`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": `application/json`,
            },
            data: {
                "name": resumeData["name"],
                "email": resumeData["email"],
                "phone": resumeData["phone"],
                "gender": resumeData["gender"],
                "qualification": resumeData["qualification"],
                "college": resumeData["college"],
                "skills": resumeData["skills"],
                "yearOfGraduation": resumeData["yearOfGraduation"],
                "atsScore": atsData["score"],
                "atsRemarks": atsData["remarks"]
            }
        };

        axios(config)
            .then(async (response) => {
                setUploading(false);
                toast.success("Resume saved!");
                window.location.href = "/home/";
            })
            .catch((error) => {
                setUploading(false);
                toast.error("Something went wrong!");
            });
    }

    return (
        <div className="w-full h-full overflow-y-scroll flex flex-col items-center p-5">
            <div className="form-control w-full p-5 h-fit max-w-5xl flex flex-col bg-neutral-100  rounded-xl">
                <input type="file" onChange={(e) => uploadResume(e)} ref={fileRef} hidden />
                <label className="label mt-4">
                    <span className="label-text">Get started by uploading your Resume / CV</span>
                </label>
                <button onClick={() => {
                    if (uploading) return;
                    fileRef.current?.click();
                }} className={"btn btn-primary " + (uploading ? "opacity-50" : "")}>
                    📄 Upload your Resume / CV
                </button>
                <div className="w-full flex items-center justify-center mt-3">
                    <div className="w-full bg-gray-300 h-[2px]"></div>
                    <p className="mx-4">OR</p>
                    <div className="w-full bg-gray-300 h-[2px]"></div>
                </div>
                <div className="flex flex-row space-x-5">
                    <div className="w-1/2">
                        <label className="label mt-4">
                            <span className="label-text">Full Name <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full"
                            value={resumeData["name"]}
                            onChange={(e) => {
                                setResumeData({
                                    ...resumeData,
                                    name: e.target.value
                                });
                            }}
                        />
                        <label className="label mt-4">
                            <span className="label-text">Email <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            value={resumeData["email"]}
                            onChange={(e) => {
                                setResumeData({
                                    ...resumeData,
                                    email: e.target.value
                                });
                            }}
                        />
                        <label className="label mt-4">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered w-full"
                            value={resumeData["phone"]}
                            onChange={(e) => {
                                setResumeData({
                                    ...resumeData,
                                    phone: e.target.value
                                });
                            }}
                        />
                        <label className="label mt-4">
                            <span className="label-text">Gender</span>
                        </label>
                        <select className="input input-bordered w-full" value={resumeData["gender"].toString().toLowerCase()} onChange={(x) => {
                            setResumeData({
                                ...resumeData,
                                gender: x.target.value
                            })
                        }}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <label className="label mt-4">
                            <span className="label-text">Qualification <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="Qualification"
                            className="input input-bordered w-full"
                            value={resumeData["qualification"]}
                            onChange={(e) => {
                                setResumeData({
                                    ...resumeData,
                                    qualification: e.target.value
                                });
                            }}
                        />
                        <button onClick={() => saveResumeData()} className={"btn btn-primary w-full mt-10 " + (uploading || (resumeData["name"].length === 0 || resumeData["email"].length === 0) ? "opacity-50" : "")}>CONTINUE</button>
                    </div>

                    {/* col 2 */}
                    <div className="w-1/2">
                        <label className="label mt-4">
                            <span className="label-text">College</span>
                        </label>
                        <input
                            type="text"
                            placeholder="College"
                            className="input input-bordered w-full"
                            value={resumeData["college"]}
                            onChange={(e) => {
                                setResumeData({
                                    ...resumeData,
                                    college: e.target.value
                                });
                            }}
                        />
                        <label className="label mt-4">
                            <span className="label-text">Skills</span>
                        </label>
                        {
                            resumeData["skills"].map((item: any, index: number) => {
                                return <label key={index} className="hover:bg-slate-200 badge badge-outline p-4 mr-2 mb-2">{item} <FiX className="ml-2 cursor-pointer" onClick={() => {
                                    setResumeData({
                                        ...resumeData,
                                        skills: resumeData["skills"].filter((skill: any) => skill !== item)
                                    })
                                }} /></label>
                            })
                        }
                        <label htmlFor="addskill_modal" className="cursor-pointer badge bg-primary text-white p-4 mr-2 mb-2"> Add Skill<FiPlus className="ml-2" /></label>
                        <label className="label mt-4">
                            <span className="label-text">Year of Graduation <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="Year of Graduation"
                            className="input input-bordered w-full"
                            value={resumeData["yearOfGraduation"]}
                            onChange={(e) => {
                                setResumeData({
                                    ...resumeData,
                                    yearOfGraduation: e.target.value
                                });
                            }}
                        />
                    </div>
                </div>
                {/* Col 1 */}
            </div>
            <ToastContainer />
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
                                setResumeData({
                                    ...resumeData,
                                    skills: [...resumeData["skills"], newSkill]
                                })
                                setNewSkill("");
                            }
                        }} >Add</label>
                    </div>
                </div>
            </div>

        </div>
    );
}
