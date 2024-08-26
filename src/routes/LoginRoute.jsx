import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Auth/LoginPage";
import SignupPage from "../pages/Auth/SignupPage";
import OtpPage from "../pages/Auth/OtpPage";

export default function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/otp" element={<OtpPage />} />
    </Routes>
  );
}
