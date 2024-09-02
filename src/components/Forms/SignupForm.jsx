import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

export default function SignupForm({ setUserData }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dataSubmit = (e) => {
    e.preventDefault();
    setUserData({ email, name, password });
  };

  return (
    <div className="flex flex-col gap-5 mx-auto">
      {" "}
      <form className="flex flex-col gap-5 mx-auto" onSubmit={dataSubmit}>
        <div className="flex flex-col">
          <label className="font-semibold">Name:</label>
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black text-white py-0.5 border-green-500 px-1.5 border-b focus:border-green-700 focus:outline-none h-[2.5rem] w-[18rem]"
            required
            placeholder="Robin James"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Email:</label>
          <input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black text-white border-green-500 py-0.5 px-1.5 border-b focus:border-green-700 focus:outline-none h-[2.5rem] w-[18rem]"
            required
            placeholder="Eg. robin@hotmail.com"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Password:</label>
          <div className="flex justify-center items-center border-b border-green-500 focus:border-green-700">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black text-white py-0.5 px-1.5 h-[2.5rem] w-[16rem] focus:outline-none"
              placeholder="******"
            />
            <FaRegEye
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="cursor-pointer"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#51D289] text-black w-[18rem] h-[2.5rem] rounded-sm"
        >
          Register Account
        </button>

        <Link
          to={"/"}
          className="text-white font-light text-center cursor-pointer"
        >
          Already have an account?{" "}
          <span className="text-green-500">Sign In</span>
        </Link>
      </form>
    </div>
  );
}
