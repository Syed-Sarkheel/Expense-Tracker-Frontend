import React, { useState } from "react";
import Select from "react-select";
export default function ExpenseForm({ submitFormData, getCategoryData }) {
  const [expenseDate, setExpenseDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [checked, setChecked] = useState(false);
  const [createCategory, setCreateCategory] = useState("");

  const options = getCategoryData?.map((category) => {
    return { value: category?._id, label: category?.name };
  });

  console.log(options);

  const submitForm = (e) => {
    e.preventDefault();

    if (checked)
      submitFormData({
        expenseDate,
        amount,
        description,
        category: createCategory,
        newCategory: true,
      });
    else
      submitFormData({
        expenseDate,
        amount,
        description,
        category,
        newCategory: false,
      });

    // setExpenseDate("");
    // setAmount("");
    // setDescription("");
    // setCategory("");
    // setChecked(false);
    // setCreateCategory("");
  };

  return (
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
            value={expenseDate}
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
            value={amount}
            id="amount"
            className="border-b-2 border-green-500 bg-inherit text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out"
            required
            min={0}
            onChange={(e) => setAmount(e.target.value)}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        <div className="flex gap-2 items-center text-center">
          <input
            type="checkbox"
            className="h-4 w-4 cursor-pointer accent-green-500"
            value={checked}
            onChange={() => setChecked(!checked)}
          />
          <label>Create Catergory</label>
        </div>

        {!checked ? (
          <div className="text-black">
            <Select
              options={options}
              className="w-[18rem] text-bl text-black"
              value={category}
              onChange={(state) => setCategory(state)}
            />
          </div>
        ) : (
          <input
            type="text"
            value={createCategory}
            onChange={(e) => setCreateCategory(e.target.value)}
            placeholder="Type your category here"
            className="border-b-2 border-green-500 bg-transparent text-lg p-2 outline-none focus:border-green-700 transition-all duration-300 ease-in-out"
          />
        )}

        <div className="flex flex-col">
          <label htmlFor="description" className="text-xl font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={description}
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
  );
}
