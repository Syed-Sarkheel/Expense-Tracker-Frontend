import { useNavigate } from "react-router-dom";
import LoginImg from "../../assets/login_image.svg";
import SignupForm from "../../components/Forms/SignupForm";
import usePostData from "../../hooks/usePostData";

export default function SignupPage() {
  const fetchData = usePostData("/auth/register");
  const navigate = useNavigate();

  const UserDataSubmittion = async (sendData) => {
    console.log(sendData);
    const { data, err, message } = await fetchData(sendData);
    setTimeout(() => {
      if (err) {
        alert(message || "An unexpected error occurred. Please try again.");
      } else {
        alert(
          `User with email: ${data?.user?.email} is successfully registered.`
        );
        console.log(data, err, message);
        navigate("/");
      }
    }, 500);
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
        <SignupForm setUserData={UserDataSubmittion} />
      </div>
    </div>
  );
}
