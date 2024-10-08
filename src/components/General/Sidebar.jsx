import React from "react";
import { BiCategory } from "react-icons/bi";
import { GiBackwardTime } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { FaUserCog } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const logout = () => {
    Cookies.remove("at");
    Cookies.remove("rt");
    Cookies.remove("user");
    navigate("/");
  };

  const css = "text-white text-3xl bg-transparent m-auto p-auto ";

  const icons = [
    { title: "Dashboard", icon: <BiCategory className={css} />, url: "/user" },
    {
      title: "Transactions",
      icon: <GiBackwardTime className={css} />,
      url: "/user/transactions",
    },
    {
      title: "Add Income",
      icon: <GiPayMoney className={css} />,
      url: "/user/addIncome",
    },
    {
      title: "Add Expense",
      icon: <GiReceiveMoney className={css} />,
      url: "/user/addExpense",
    },
    {
      title: "Profile & Settings",
      icon: <FaUserCog className={css} />,
      url: "/user/profile",
    },
  ];

  return (
    <div className="w-16 h-screen bg-neutral-900 flex flex-col gap-12 items-center justify-center ">
      {icons.map((iconData, index) => (
        <div
          key={index}
          title={iconData.title}
          className={`duration-700  ${
            pathname == iconData?.url ? "bg-green-600" : "bg-black"
          } hover:bg-green-500 w-[3rem] h-[3rem] rounded-full flex justify-center cursor-pointer border border-neutral-700`}
          onClick={() => iconData.url && navigate(iconData.url)}
        >
          {iconData.icon}
        </div>
      ))}

      <div
        title={"Logout"}
        className="duration-500 w-[3rem] h-[3rem] cursor-pointer bg-black rounded-full hover:bg-green-500 mx-auto flex items-center justify-center mb-10 border border-neutral-700"
        onClick={logout}
      >
        <CiLogout className={css} />
      </div>
    </div>
  );
}
