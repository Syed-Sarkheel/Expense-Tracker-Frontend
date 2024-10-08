import React, { useState } from "react";

export default function IncomeForm({ submitFormData }) {
  const [incomeDate, setIncomeDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    submitFormData({ incomeDate, amount, description, category });
    console.log({ incomeDate, amount, description, category });
    setIncomeDate("");
    setAmount("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full lg:w-1/2 xl:w-1/2 p-5">
      <h2 className="text-4xl mb-8 font-semibold text-white">Add Income</h2>
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
            value={incomeDate}
            type="date"
            id="date"
            className="border-b-2 border-green-500 bg-inherit text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out"
            required
            onChange={(e) => setIncomeDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount" className="text-xl font-medium">
            Amount
          </label>
          <input
            value={amount}
            type="number"
            id="amount"
            className="border-b-2 border-green-500 bg-inherit text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out"
            required
            onChange={(e) => setAmount(e.target.value)}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="text-xl font-medium">
            Source
          </label>
          <input
            value={category}
            type="text"
            id="category"
            className="border-b-2 border-green-500 bg-inherit text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out"
            required
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-xl font-medium">
            Description
          </label>
          <textarea
            value={description}
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            className="border-b-2 border-green-500 bg-inherit text-lg p-2 outline-none resize-none focus:border-green-700 transition-all duration-300 ease-in-out"
          />
        </div>

        <button
          type="submit"
          className="w-1/2 mx-auto mt-6 p-3 text-white bg-green-500 rounded-md hover:bg-green-600 active:bg-green-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Add Income
        </button>
      </form>
    </div>
  );
}
