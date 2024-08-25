import React, { useState } from "react";

export default function OtpForm({ sendUserData, confirmOTP }) {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const otpHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    const isVerified = await confirmOTP({ email, code: parseInt(code, 10) });
    if (isVerified) {
      console.log("OTP verified successfully.");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const sendOtpHandler = (e) => {
    e.preventDefault();
    setIsOtpSent(true); // Hide the email form and show the OTP input
    console.log("OTP Sent to:", email);
    sendUserData({ email });
  };
  return (
    <div>
      {!isOtpSent ? (
        <form
          className="flex flex-col gap-5 mx-auto justify-center items-center"
          onSubmit={sendOtpHandler}
        >
          <div className="flex flex-col">
            <label className="font-semibold">Email:</label>
            <input
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black text-white py-0.5 px-1.5 border-b border-green-500 focus:border-green-300 focus:outline-none h-[2.5rem] w-[18rem]"
              required
              placeholder="robin@hotmail.com"
              disabled={isOtpSent}
            />
          </div>

          <button
            type="submit"
            className="bg-[#51D289] text-black w-[18rem] h-[2.5rem] rounded-md"
          >
            Send OTP
          </button>
        </form>
      ) : (
        <form
          className="flex flex-col gap-5 mx-auto justify-center items-center"
          onSubmit={otpHandler}
        >
          <div className="flex flex-col">
            <label className="font-semibold">OTP:</label>
            <input
              type={"text"}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="bg-black py-0.5 px-1.5 border-b-2 border-green-500 focus:border-green-700 focus:outline-none h-[2.5rem] w-[18rem]"
              autoFocus
              required
              placeholder="Enter OTP"
            />
          </div>

          <button
            type="submit"
            className="bg-[#51D289] text-black w-[18rem] h-[2.5rem] rounded-md"
          >
            Confirm OTP
          </button>
        </form>
      )}
    </div>
  );
}
