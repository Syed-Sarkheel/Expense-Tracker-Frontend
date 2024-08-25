import React from "react";
import LoginImg from "../assets/login_image.svg";
import OtpForm from "../components/Forms/OtpForm";
import usePostData from "../hooks/usePostData";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function OtpPage() {
  const fetchData = usePostData("/auth/generateOTP");
  const confirmOTPData = usePostData("/auth/confirmOTP");
  const navigate = useNavigate();

  const sendUserData = async (sendData) => {
    console.log(sendData);
    const { data, err, message } = await fetchData(sendData);
    console.log("Response: ", { data, err, message });
  };

  const confirmOTP = async (sendData) => {
    console.log(sendData);
    const { data, err, message } = await confirmOTPData(sendData);
    console.log("Response: ", { data, err, message });
    if (err) {
      alert(message);
      return false;
    } else {
      Cookies.set("at", data?.accessToken, { expires: 1 });
      Cookies.set("rt", data?.refreshToken);
      Cookies.set("user", JSON.stringify(data?.user));
      alert(`Logging in user with email: ${data?.user?.email}`);
      console.log("Response: ", { data, err, message });
      navigate("/user");
      return true;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-wrap flex-col lg:flex-row ">
        <img
          src={LoginImg}
          alt=""
          draggable={false}
          className="max-h-screen hidden lg:block"
        />
        <div className="flex flex-col justify-center gap-10 mx-auto w-[50%] h-screen">
          <h3 className="text-5xl font-bold cursor-default text-center">
            Sign In via OTP
          </h3>
          <OtpForm sendUserData={sendUserData} confirmOTP={confirmOTP} />
        </div>
      </div>
    </div>
  );
}
