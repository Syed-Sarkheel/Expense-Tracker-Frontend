import React, { useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import { FaRegCircleUser } from "react-icons/fa6";
import Cookies from "js-cookie";
import usePutData from "../../hooks/usePutData";
import { FaRegEye } from "react-icons/fa";
export default function UserProfile() {
  const [user] = useState(JSON.parse(Cookies.get("user")));
  const updateData = usePutData(`/user/${user?._id}`);
  const [password, setPassword] = useState("");
  const [editPassword, setEditPassword] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  console.log(editPassword);

  const UpdatePass = async () => {
    console.log(password);
    const { message } = await updateData({ password });
    alert(message);
    setEnablePassword(false);
  };

  // console.log(user);
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
                placeholder={user.name}
                disabled
              />
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
                placeholder={user.email}
                disabled
              />
            </div>
          </div>
          {!editPassword ? (
            <button
              className="bg-green-500 text-white rounded-md p-3 mt-4 hover:bg-green-600 transition-all duration-300 ease-in-out"
              onClick={() => setEditPassword((prev) => !prev)}
            >
              Change Password
            </button>
          ) : null}

          {editPassword && (
            <div className="flex flex-col gap-3 ">
              <label className="text-xl font-medium mb-2">Password:</label>
              <div className="flex justify-center items-center border-b-2 border-green-500 focus:border-green-300">
                <input
                  type={!viewPassword ? `password` : `text`}
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent text-lg p-2 outline-none transition-all duration-300 ease-in-out"
                  placeholder="******"
                />
                <FaRegEye
                  onClick={() => {
                    setViewPassword(!viewPassword);
                  }}
                  className="cursor-pointer"
                />
              </div>
              <button
                className="bg-green-500 text-white rounded-md p-3 mt-4 hover:bg-green-600 transition-all duration-300 ease-in-out"
                onClick={UpdatePass}
              >
                Submit New Password
              </button>
              <button
                className="bg-transparent text-white rounded-md p-3 mt-4 hover:bg-red-400 transition-all duration-300 ease-in-out"
                onClick={() => {
                  setEditPassword(false);
                  setPassword("");
                }}
              >
                Cancel Update
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
