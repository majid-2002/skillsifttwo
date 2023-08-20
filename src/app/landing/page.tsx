"use client";
import { serverURL } from "@/utils/util";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiArrowRight, FiLogIn } from "react-icons/fi";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";

export default function Landing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async (type: number) => {
    if (password.length < 6) {
      toast.error("Password must be atleast 6 characters long!");
      return;
    }

    const config = {
      method: "POST",
      url: `${serverURL}/user/signup`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
      data: {
        name: name,
        email: email,
        password: password,
        type: type,
      },
    };

    axios(config)
      .then(async (response) => {
        setEmail("");
        setPassword("");
        setName("");
        toast.success("Account created!");
        await login(false);
        if (type === 0) {
          window.location.href = "/start";
        }
        else {
          window.location.href = "/company";
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };

  const [logginIn, setLogginIn] = useState(false);

  const login = async (showToast: boolean) => {
    if (logginIn) return;
    setLogginIn(true);
    const config = {
      method: "POST",
      url: `${serverURL}/user/login`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
      data: {
        email: email,
        password: password,
      },
    };

    axios(config).then((response) => {
      setLogginIn(false);
      if (showToast) {
        toast.success("Logged in!");
      }
      setPassword("");
      setEmail("");
      localStorage.setItem("token", response.data.token);
      if (showToast) {
        if (response.data.user.type === 0) {
          window.location.href = "/home";
        }
        else {
          window.location.href = "/company";
        }
      }
    }).catch((error) => {
      setLogginIn(false);
      toast.error("Something went wrong!");
    });
  };

  return (
    <>
      <div className="flex w-screen h-screen flex-col text-black p-5">
        <nav className="flex justify-between">
          <p className="text-4xl font-bold ">SkillSift</p>
          <div className="flex">
            <label htmlFor="createorgaccount_modal" className="btn mr-2"><FaBuilding /> For Organizations</label>
            <label
              htmlFor="login_modal"
              className="btn btn-primary"
              onClick={() => {
                setEmail("");
                setPassword("");
              }}
            >
              <FiLogIn /> Login
            </label>
          </div>
        </nav>
        <main className="relative w-full h-full flex justify-center items-center flex-col">
          <img alt="alt" className="absolute opacity-10" style={{ width: "50vw" }} src={"https://static.vecteezy.com/system/resources/previews/021/096/523/original/3d-icon-job-search-png.png"} />
          <div className="absolute flex flex-col justify-center items-center">
            <p className="text-4xl font-bold">Final stop on job search.</p>
            <p className="text-lg mt-4 font-semibold">
              Upload your resume and get job recommendations based on
              your skills. We'll send job applications on behalf of
              you.
            </p>
            <label
              htmlFor="createaccount_modal"
              className="btn btn-primary mt-10 btn-lg"
            >
              Get Started <FiArrowRight />
            </label>
          </div>
        </main>
        {/* Create Account Modal */}
        <input
          type="checkbox"
          id="createaccount_modal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">
                Create Account
              </h3>
              <label
                htmlFor="createaccount_modal"
                className="btn btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>
            </div>
            <p>Get started by creating an account!</p>
            <label className="label mt-4">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="label mt-4">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label mt-4">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="modal-action">
              <label
                htmlFor="createaccount_modal"
                className="btn btn-primary w-full"
                onClick={() => {
                  createAccount(0);
                }}
              >
                Create Account
              </label>
            </div>
          </div>
        </div>
        {/* Create Organization Account Modal */}
        <input
          type="checkbox"
          id="createorgaccount_modal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box">
            <div className="flex justify-between items-center">
              <h3 className="flex items-center font-bold text-lg">
                <FaBuilding className="mr-2" /> Create Organization
              </h3>
              <label
                htmlFor="createorgaccount_modal"
                className="btn btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>
            </div>
            <p>Get started by creating an organization account!</p>
            <label className="label mt-4">
              <span className="label-text">Organization Name</span>
            </label>
            <input
              type="text"
              placeholder="Organization Name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="label mt-4">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label mt-4">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="modal-action">
              <label
                htmlFor="createorgaccount_modal"
                className="btn btn-primary w-full"
                onClick={() => {
                  createAccount(1);
                }}
              >
                Create Account
              </label>
            </div>
          </div>
        </div>
        {/* Login */}
        <input
          type="checkbox"
          id="login_modal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Login</h3>
              <label
                htmlFor="login_modal"
                className="btn btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label mt-4">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label mt-4">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="modal-action">
              <button
                className={"btn btn-primary w-full " + (logginIn ? "opacity-50" : "")}
                onClick={() => login(true)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
