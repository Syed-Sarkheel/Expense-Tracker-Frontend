import LoginImg from "../assets/login_image.svg";
import SignupForm from "../components/Forms/SignupForm";

export default function SignupPage() {
  const UserDataSubmittion = (data) => {
    console.log(data);
  };

  const OtpDataSubmittion = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center flex-wrap flex-col lg:flex-row ">
      <img
        src={LoginImg}
        alt=""
        draggable={false}
        className="max-h-screen hidden lg:block"
      />
      <div className="flex flex-col justify-center gap-10 mx-auto w-[50%] h-screen">
        <h3 className="text-5xl font-bold cursor-default text-center">
          Sign Up
        </h3>
        <SignupForm
          setUserData={UserDataSubmittion}
          setOtpData={OtpDataSubmittion}
        />
      </div>
    </div>
  );
}
