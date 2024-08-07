import React from "react";
import Sidebar from "../../components/General/Sidebar";
import { IoWallet } from "react-icons/io5";
import { GiMoneyStack, GiExpense } from "react-icons/gi";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function Dashboard() {
  const username = "Syed Sarkheel";
  const transactions = [
    {
      icon: <GiMoneyStack className="text-4xl text-green-500" />,
      title: "Total Income",
      amount: "16000",
    },
    {
      icon: <GiExpense className="text-4xl text-green-500" />,
      title: "Total Expense",
      amount: "16000",
    },
    {
      icon: <IoWallet className="text-4xl text-green-500" />,
      title: "Total Balance",
      amount: "16000",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full">
      <Sidebar />
      <div className="text-4xl font-semibold p-5 w-full">
        <h2>Hello, {username}</h2>
        <div className="flex flex-wrap gap-10 justify-center items-center p-10 cursor-default">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="shadow-md shadow-green-700 hover:drop-shadow-lg p-5 w-full sm:w-[80%] md:w-[50%] lg:w-[25%] bg-neutral-800 gap-6 rounded-md flex flex-col items-center text-center"
            >
              <div>{transaction.icon}</div>
              <div className="flex flex-col gap-4 bg-transparent">
                <h4>{transaction.title}</h4>
                <h4 className="flex justify-center items-center gap-1 ">
                  <FaIndianRupeeSign className="text-3xl" />
                  {transaction.amount}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
