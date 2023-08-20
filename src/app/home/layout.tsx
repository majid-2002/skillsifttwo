"use client";
import { FiBook, FiBriefcase, FiFileText, FiGift, FiHome, FiLogOut, FiMessageCircle, FiMoreHorizontal, FiSettings, FiShoppingBag, FiShoppingCart, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect } from "react";
import axios from "axios";
import { serverURL } from "@/utils/util";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [loaded, setLoaded] = React.useState(false);

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

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.href = "/landing";
    }
    getData();
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, [])

  const pathName = usePathname();
  return (!loaded ? "" : <div className="flex flex-row h-full">
    <div className={'flex flex-col p-5 min-w-[275px] max-w-[15vw] h-full rounded-md max-sm:fixed max-sm:w-full max-sm:h-full max-sm:max-w-none bg-base-100 max-sm:z-50 '}>
      <div className="flex justify-between items-center max-sm:mb-4">
        <p className="mb-5 max-sm:mb-3 text-xl font-bold">💼 SkillSift</p>
      </div>
      <div className='p-0 my-2 h-full w-full overflow-hidden hover:overflow-y-auto'>
        <Link href={"/home"}><button className={(pathName === "/home" ? "btn-neutral bg-black text-white " : "bg-white ") + "flex justify-start btn mb-2 w-full"}><FiHome /> Home</button></Link>
        <Link href={"/home/jobs"}><button className={(pathName === "/home/jobs" ? "btn-neutral bg-black text-white " : "bg-white ") + "flex justify-start btn mb-2 w-full"}><FiBriefcase /> Jobs</button></Link>
        <Link href={"/home/applications"}><button className={(pathName === "/home/applications" ? "btn-neutral bg-black text-white " : "bg-white ") + "flex justify-start btn mb-2 w-full"}><FiFileText /> Applications</button></Link>
        <Link href={"/home/chats"}><button className={(pathName === "/home/chats" ? "btn-neutral bg-black text-white " : "bg-white ") + "flex justify-start btn mb-2 w-full"}><FiMessageCircle /> Chats</button></Link>
        <Link href={"/home/profile"}><button className={(pathName === "/home/profile" ? "btn-neutral bg-black text-white " : "bg-white ") + "flex justify-start btn mb-2 w-full"}><FiUser /> Profile</button></Link>
      </div>
      <hr />
      <div tabIndex={0} className='cursor-pointer dropdown dropdown-top flex items-center mt-2 hover:bg-base-200 p-2 rounded-lg'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center'>
            <div className="avatar placeholder mr-2">
              <div className="bg-blue-700 text-white mask mask-squircle w-10">
                <span><FiUser /></span>
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
