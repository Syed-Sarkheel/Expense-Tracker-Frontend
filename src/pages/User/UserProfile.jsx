import React from "react";
import Sidebar from "../../components/General/Sidebar";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

export default function UserProfile() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full min-h-screen">
      <Sidebar />
      <div className="flex flex-col justify-center items-center mx-auto p-5 w-full lg:w-2/3 xl:w-1/2">
        <FaRegCircleUser className="text-8xl mb-6 text-gray-700" />
        <div className="flex flex-col gap-6 w-full max-w-md">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xl font-medium mb-2">
              Name
            </label>
            <div className="flex items-center border-b-2 border-green-500">
              <input
                type="text"
                id="name"
                className="w-full bg-transparent text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out"
                placeholder="Syed Sarkheel"
              />
              <MdEdit className="text-2xl text-green-500 cursor-pointer ml-2" />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl font-medium mb-2">
              Email
            </label>
            <div className="flex items-center border-b-2 border-green-500">
              <input
                type="email"
                id="email"
                className="w-full bg-transparent text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out"
                placeholder="syedsarkheel@gmail.com"
              />
              <MdEdit className="text-2xl text-green-500 cursor-pointer ml-2" />
            </div>
          </div>

          <button className="bg-green-500 text-white rounded-md p-3 mt-4 hover:bg-green-600 transition-all duration-300 ease-in-out">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
