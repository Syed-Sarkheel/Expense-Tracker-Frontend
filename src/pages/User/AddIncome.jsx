import React, { useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import expenseImage from "../../assets/addexpense.svg";
import IncomeForm from "../../components/Forms/IncomeForm";

export default function AddIncome() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-2 bg-cover bg-center"
      style={{ backgroundImage: `url(${expenseImage})` }}
    >
      <Sidebar />
      <IncomeForm />
    </div>
  );
}
