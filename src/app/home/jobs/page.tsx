"use client";
import React from "react";
import { FaBuilding, FaCashRegister, FaCoins, FaDollarSign } from "react-icons/fa"
import { FiArrowRight, FiBriefcase, FiCalendar, FiDollarSign } from "react-icons/fi";

export default function Page() {
    const [tabIndex, setTabIndex] = React.useState<number>(0);

    return <div className="flex flex-col p-5 h-full overflow-y-auto">
        <p className="font-bold text-3xl">Jobs</p>
        <div className="my-5">
            <button onClick={() => setTabIndex(0)} className={"btn btn-md mr-1 " + (tabIndex === 0 ? "btn-primary" : "")}>ALL</button>
            <button onClick={() => setTabIndex(1)} className={"btn btn-md " + (tabIndex === 1 ? "btn-primary" : "")}>RECOMMENDED</button>
        </div>
        {
            [...Array(10)].map((item: any, index: number) => {
                return <div key={index} className="flex justify-between p-4 bg-gray-100 rounded-lg mb-3">
                    <div className="flex flex-col">
                        <p className="font-semibold text-xl mb-2">Software Engineer (Remote)</p>
                        <p className="flex items-center font-semibold text-md mb-4"><FaBuilding className="mr-2" /> Google</p>
                        <p className="flex items-center text-md"><FiBriefcase className="mr-2" />Required Skills: Next.js, MongoDB, Node.js</p>
                        <p className="flex items-center text-md"><FiCalendar className="mr-2" />Deadline: 20 August 2023</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="flex items-center text-lg"><FaDollarSign /> Salary: $1200 - $1500</p>
                        <button className="btn btn-primary">View Details <FiArrowRight /></button>
                    </div>
                </div>
            })
        }
    </div>
}
