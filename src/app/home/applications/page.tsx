"use client";
import React from "react";
import { FaBuilding, FaCashRegister, FaCoins, FaDollarSign } from "react-icons/fa"
import { FiArrowRight, FiBriefcase, FiCalendar, FiDollarSign } from "react-icons/fi";

export default function Page() {
    return <div className="flex flex-col p-5 h-full overflow-y-auto">
        <p className="font-bold text-3xl">Applications</p>
        <p className="font-bold text-2xl my-4 opacity-60">Your Recent Job Applications</p>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Application Date</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...Array(10)].map((item: any, index: number) => {
                            return <tr key={index}>
                                <th className="text-md font-semibold">1</th>
                                <td className="text-md font-semibold">Full Stack Developer (Remote)</td>
                                <td className="text-md font-semibold">Google Inc.</td>
                                <td className="text-md font-semibold">18 Aug 2023</td>
                                <td className="text-md font-semibold">Pending</td>
                                <td className="text-md font-semibold"><button className="btn btn-md">Details</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
}
