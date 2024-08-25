import React, { useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import { IoWallet } from "react-icons/io5";
import { GiMoneyStack, GiExpense } from "react-icons/gi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Cookies from "js-cookie";
import useGetData from "../../hooks/useGetData";
import GraphGenerator from "../../components/Graphs/GraphGenerator";
import TransactionCard from "../../components/General/TransactionCard";

export default function Dashboard() {
  const [username] = useState(JSON.parse(Cookies.get("user"))?.name);

  const {
    data: balance,
    error: balanceError,
    message: balanceMessage,
  } = useGetData("/balance", []);

  const {
    data: income,
    error: incomeError,
    message: incomeMessage,
  } = useGetData("/income", []);

  const {
    data: expense,
    error: expenseError,
    message: expenseMessage,
  } = useGetData("/expense", []);

  const {
    data: transactionsData,
    error: transactionsError,
    message: transactionsMessage,
  } = useGetData("/balance/transactions", []);

  const recentTransactions = transactionsData?.slice(0, 3) || [];

  const transactions = [
    {
      icon: <GiMoneyStack className="text-4xl text-green-500" />,
      title: "Total Income",
      amount: income || 0,
    },
    {
      icon: <GiExpense className="text-4xl text-green-500" />,
      title: "Total Expense",
      amount: expense || 0,
    },
    {
      icon: <IoWallet className="text-4xl text-green-500" />,
      title: "Total Balance",
      amount: (
        <span className={balance >= 0 ? "text-green-500" : "text-red-500"}>
          {balance || 0}
        </span>
      ),
    },
  ];

  const graphValues = [
    { label: "Total Income", value: income || 0 },
    { label: "Total Expense", value: expense || 0 },
    { label: "Total Balance", value: balance || 0 },
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
              className="shadow-md shadow-green-700 hover:drop-shadow-lg p-5 w-full sm:w-[80%] md:w-[50%] lg:w-[25%] bg-neutral-900 gap-6 rounded-md flex flex-col items-center text-center"
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
        <div className="flex w-full gap-4 mt-4 cursor-default">
          <div className="flex flex-col w-[50%] text-sm bg-neutral-900 p-4 rounded-md overflow-hidden shadow-sm shadow-green-700">
            <h3 className="mb-8">Recent Transactions</h3>
            {recentTransactions.map((transaction, index) => (
              <TransactionCard
                key={transaction._id}
                description={transaction.description || transaction.category}
                date={transaction.date}
                category={transaction.category}
                amount={transaction.amount}
                type={transaction.type}
              />
            ))}
          </div>
          <div className="flex flex-col w-[50%] bg-neutral-900 rounded-md p-4 shadow-sm shadow-green-700">
            <h3 className="mb-4 text-sm">Transaction Analysis</h3>
            <GraphGenerator
              data={[...graphValues]}
              type="Line"
              x="Transactions"
              y="Amount"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
