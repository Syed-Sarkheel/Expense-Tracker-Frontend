import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupForm({ setUserData, setOtpData }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [otp, setOTP] = useState("");
  const [switchForm, setSwitchForm] = useState(true);

  const dataSubmit = (e) => {
    e.preventDefault();
    setUserData({ email, name, password });
    setSwitchForm(false);
  };

  const otpHandler = (e) => {
    e.preventDefault();
    setOtpData({ otp, email, name, password });
  };

  return (
    <div className="flex flex-col gap-5 mx-auto">
      {switchForm ? (
        <form className="flex flex-col gap-5 mx-auto" onSubmit={dataSubmit}>
          <div className="flex flex-col">
            <label className="font-semibold">Name:</label>
            <input
              type={"name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black text-white py-0.5 border-green-500 px-1.5 border-b focus:border-white focus:outline-none h-[2.5rem] w-[18rem]"
              autoFocus
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
              className="bg-black text-white border-green-500 py-0.5 px-1.5 border-b focus:border-white focus:outline-none h-[2.5rem] w-[18rem]"
              autoFocus
              required
              placeholder="Eg. robin@hotmail.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Password:</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black text-white border-green-500 py-0.5 px-1.5 border-b focus:border-white focus:outline-none h-[2.5rem] w-[18rem]"
              placeholder="******"
            />
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
      ) : (
        <form className="flex flex-col gap-5 mx-auto" onSubmit={otpHandler}>
          <div className="flex flex-col">
            <label className="font-semibold">OTP:</label>
            <input
              type={"name"}
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="bg-black text-white py-0.5 px-1.5 border-b focus:border-white focus:outline-none h-[2.5rem] w-[18rem]"
              autoFocus
              required
              placeholder="Enter OTP"
            />
          </div>
          <button
            type="submit"
            className="bg-[#51D289] text-black w-[18rem] h-[2.5rem] rounded-sm"
          >
            Submit OTP
          </button>
        </form>
      )}
    </div>
  );
}
