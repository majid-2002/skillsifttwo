"use client";
import Image from "next/image";
import Card from "./Card";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverURL } from "@/utils/util";

function Homepage() {
  const [recommendedJobs, setRecommendedJobs] = useState<any>([]);

  const getRecommendedJobs = async () => {
    const config = {
      method: "GET",
      url: `${serverURL}/job/recommended`,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(async (response) => {
        setRecommendedJobs(response.data);
      })
  }

  useEffect(() => {
    getRecommendedJobs();
  }, []);

  return (
    <div className="w-full h-full overflow-auto">

      <div>
        <p className="text-2xl sm:text-4xl font-extrabold px-6 mt-4">Recommended Jobs</p>
        <p className="text-xl font-extrabold px-6 opacity-60">Based on skills mentioned in your resume</p>

        <div className="flex space-x- md:px-8    items-center gap-3     flex-wrap justify-start   px-3 py-1">
          {
            recommendedJobs.map((item: any, index: number) => {
              return <Link key={index} href={`/job/${item?._id}`}><Card title={item?.title} company={item?.companyName} logo="" date={item?.deadline} salary={item?.salary} location={item?.location} skills={item?.skillsRequired} /></Link>
            })
          }
        </div>

      </div>

      <div>
        <p className="text-2xl sm:text-4xl font-extrabold p-6">All Jobs</p>

        <div className="flex space-x- md:px-8    items-center gap-3     flex-wrap justify-start   px-3 py-1">
          {recommendedJobs.map((item: any, index: number) => {
            return <Link key={index} href="/JobDetails"><Card title={item?.title} company={item?.companyName} logo="" date={item?.deadline} salary={item?.salary} location={item?.location} skills={item?.skillsRequired} /></Link>
          })}
        </div>

      </div>


    </div>





  )
}

export default Homepage;
