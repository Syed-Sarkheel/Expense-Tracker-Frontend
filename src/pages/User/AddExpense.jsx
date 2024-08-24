import React, { useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import expenseImage from "../../assets/addexpense.svg";
import { FaIndianRupeeSign } from "react-icons/fa6";
import ExpenseForm from "../../components/Forms/ExpenseForm";

export default function AddExpense() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-2  bg-cover bg-center"
      style={{ backgroundImage: `url(${expenseImage})` }}
    >
      <Sidebar />
      <ExpenseForm />
    </div>
  );
}
