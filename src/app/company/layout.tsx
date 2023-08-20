"use client";
import { FiBriefcase, FiFileText, FiHome, FiLogOut, FiMessageCircle, FiMoreHorizontal, FiSettings, FiUser } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBuilding } from "react-icons/fa";
import axios from "axios";
import { serverURL } from "@/utils/util";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

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

  return (
    <div className="flex flex-row h-full w-full">
      <div className={'flex flex-col p-5 min-w-[300px] max-w-[20vw] h-full rounded-md max-sm:fixed max-sm:w-full max-sm:h-full max-sm:max-w-none bg-base-100 max-sm:z-50 '}>
        <div className="flex items-center mb-4">
          <p className="text-xl font-bold">💼 SkillSift</p><label className="ml-2 cursor-pointer badge badge-primary badge-outline">ORGANIZATIONS</label>
        </div>
        <div className='p-0 my-2 h-full w-full overflow-hidden hover:overflow-y-auto'>
          <Link href={"/company"}><button className={(pathName === "/company" ? "btn-neutral bg-black text-white " : "bg-white ") + "flex justify-start btn mb-2 w-full"}><FiHome /> Dashboard</button></Link>
          <Link href={"/company/jobs"}><button className={(pathName.includes("/company/jobs") ? "btn-neutral bg-black text-white " : "bg-white ") + "flex justify-start btn mb-2 w-full"}><FiBriefcase /> Jobs</button></Link>
          <Link href={"/company/applications"}><button className={(pathName === "/company/applications" ? "btn-neutral bg-black text-white " : "bg-white ") + "flex justify-start btn mb-2 w-full"}><FiFileText /> Applications</button></Link>
          <Link href={"/company/chats"}><button className={(pathName === "/company/chats" ? "btn-neutral bg-black text-white " : "bg-white ") + "flex justify-start btn mb-2 w-full"}><FiMessageCircle /> Chats</button></Link>
          <Link href={"/company/profile"}><button className={(pathName === "/company/profile" ? "btn-neutral bg-black text-white " : "bg-white ") + "flex justify-start btn mb-2 w-full"}><FiUser /> Profile</button></Link>
        </div>
        <hr />
        <div tabIndex={0} className='cursor-pointer dropdown dropdown-top flex items-center mt-2 hover:bg-base-200 p-2 rounded-lg'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center'>
              <div className="avatar placeholder mr-2">
                <div className="bg-blue-700 text-white mask mask-squircle w-10">
                  <span><FaBuilding /></span>
                </div>
              </div>
              <p className='font-semibold'>{data?.user?.name}</p>
            </div>
            <FiMoreHorizontal />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mb-2">
            <label htmlFor='settings_modal'><li className='flex'><p><FiSettings />Settings</p></li></label>
            <hr className='my-2' />
            <li className='flex' onClick={() => {
              localStorage.clear()
              window.location.href = "/landing";
            }}><p><FiLogOut className="text-red-600" />Logout</p></li>
          </ul>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
