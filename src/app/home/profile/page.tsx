"use client";
import axios from "axios";
import React from "react";
import { serverURL } from "@/utils/util";
import Link from "next/link";
import Tick from "../../components/Tick";

export default function Page() {
    const [data, setData] = React.useState<any>({});

    const getData = async () => {
        const config = {
            method: "GET",
            url: `${serverURL}/user/profile`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        };

        axios(config)
            .then(async (response) => {
                setData(response.data);
            })
    }

    React.useEffect(() => {
        getData();
    }, []);

    return <div className="flex flex-col p-5 h-full overflow-y-auto">
        <p className="font-bold text-3xl mb-5">Profile</p>
        {/* <p className="font-bold text-2xl my-5">Your Recent Job Applications</p> */}
        <p className="font-bold text-4xl my-3">{data?.user?.name}</p>
        <p className="font-semibold my-3">ATS Score</p>
        <div className="radial-progress font-bold text-4xl my-4" style={{ "--value": data?.resume?.atsScore * 10, "--size": "10rem" } as React.CSSProperties}>{data?.resume?.atsScore}</div>
        <p className="font-semibold my-3">ATS Remarks</p>
        <ul className="flex flex-col">
            {
                // @ts-ignore
                data?.resume?.atsRemarks.map((remark: any, index : any) => {
                    return <Tick color={false} key={index} text={remark} />
                })
            }
        </ul>
        <div className="flex mt-4">
            <Link href="/start"><button className="btn btn-primary">RE-UPLOAD RESUME</button></Link>
        </div>
    </div>
}
