import React from "react";
import Dashboard from "../pages/User/Dashboard";
import { Route, Routes } from "react-router-dom";
import AddExpense from "../pages/User/AddExpense";
import AddIncome from "../pages/User/AddIncome";
import Transactions from "../pages/User/Transactions";
import UserProfile from "../pages/User/UserProfile";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/addexpense" element={<AddExpense />} />
      <Route path="/addincome" element={<AddIncome />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
}
