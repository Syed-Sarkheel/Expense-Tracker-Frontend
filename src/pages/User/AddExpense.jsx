import React, { useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import expenseImage from "../../assets/addexpense.svg";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function AddExpense() {
  const [expenseDate, setExpenseDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [checked, setChecked] = useState(false);
  const [createCategory, setCreateCategory] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (checked)
      console.log({
        expenseDate,
        amount,
        description,
        category: createCategory,
        newCategory: true,
      });
    else
      console.log({
        expenseDate,
        amount,
        description,
        category,
        newCategory: false,
      });

    setExpenseDate("");
    setAmount("");
    setDescription("");
    setCategory("");
    setChecked(false);
    setCreateCategory("");
  };

  return (
    <div
      className="flex flex-col lg:flex-row gap-2  bg-cover bg-center"
      style={{ backgroundImage: `url(${expenseImage})` }}
    >
      <Sidebar />
      <div className="flex flex-col justify-center items-center mx-auto w-full lg:w-1/2 xl:w-1/2 p-5">
        <h2 className="text-4xl mb-8 font-semibold text-white">Add Expense</h2>
        <form
          onSubmit={submitForm}
          action=""
          className="flex flex-col gap-4 w-full bg-neutral-800 bg-opacity-40 p-5 rounded-md"
        >
          <div className="flex flex-col">
            <label htmlFor="date" className="text-xl font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="border-b-2 border-green-500 bg-inherit text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out"
              required
              onChange={(e) => setExpenseDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount" className="text-xl font-medium">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="border-b-2 border-green-500 bg-inherit text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out"
              required
              min={0}
              onChange={(e) => setAmount(e.target.value)}
              onWheel={(e) => e.target.blur()}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="text-xl font-medium">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="border-b-2 border-green-500 bg-inherit text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-xl font-medium">
              Description
            </label>
            <textarea
              id="description"
              className="border-b-2 border-green-500 bg-inherit text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out resize-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-1/2 mx-auto mt-6 p-3 text-white bg-green-500 rounded-md hover:bg-green-600 active:bg-green-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}
