import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm({ sendUserData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    sendUserData({ email, password });
  };
  return (
    <form className="flex flex-col gap-5 mx-auto" onSubmit={loginHandler}>
      <div className="flex flex-col">
        <label className="font-semibold">Email:</label>
        <input
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black text-white py-0.5 px-1.5 border-b border-green-500 focus:border-white focus:outline-none h-[2.5rem] w-[18rem]"
          autoFocus
          required
          placeholder="robin@hotmail.com"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Password:</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="bg-black text-white py-0.5 px-1.5 border-b border-green-500 focus:border-white focus:outline-none h-[2.5rem] w-[18rem]"
          placeholder="******"
        />
      </div>
      <span className="flex text-[1rem] cursor-pointer justify-end">
        Forgot password?
      </span>

      <button
        type="submit"
        className="bg-[#51D289] text-black w-[18rem] h-[2.5rem] rounded-sm"
      >
        Start Your Calculation
      </button>

      <Link
        to={"/signup"}
        className="text-white font-light text-center cursor-pointer"
      >
        Don&apos;t have an account?{" "}
        <span className="text-green-500">Sign Up</span>
      </Link>
    </form>
  );
}
