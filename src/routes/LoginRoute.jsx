import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import OtpPage from "../pages/OtpPage";

export default function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/otp" element={<OtpPage />} />
    </Routes>
  );
}
