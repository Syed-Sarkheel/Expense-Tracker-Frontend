import React, { useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import expenseImage from "../../assets/addexpense.svg";
import ExpenseForm from "../../components/Forms/ExpenseForm";
import useGetData from "../../hooks/useGetData";
import usePostData from "../../hooks/usePostData";

export default function AddExpense() {
  const {
    data: getCategoryData,
    error: getCategoryError,
    message: getCategoryMessage,
  } = useGetData("/category", []);
  console.log({ getCategoryData, getCategoryError, getCategoryMessage });

  const [categoryResponse, setCategoryResponse] = useState({
    data: null,
    err: null,
    message: null,
  });

  const [expenseResponse, setExpenseResponse] = useState({
    data: null,
    err: null,
    message: null,
  });

  const CreateCategory = usePostData("/category");
  const SubmitExpense = usePostData("/expense");

  const submitFormData = async (sendData) => {
    try {
      let categoryId;

      if (sendData?.newCategory) {
        const res = await CreateCategory({ name: sendData.category });
        setCategoryResponse(res);

        if (res?.data?._id) {
          categoryId = res.data._id;
        } else {
          throw new Error("Category creation failed");
        }
      } else {
        categoryId = sendData?.category?.value;
      }

      const expenseData = {
        category: categoryId,
        date: sendData?.expenseDate,
        amount: sendData?.amount,
        description: sendData?.description,
      };

      const expenseRes = await SubmitExpense(expenseData);
      setExpenseResponse(expenseRes);
      alert(expenseRes?.message);
    } catch (err) {
      console.error("Error:", err);
      setExpenseResponse({
        data: null,
        err: true,
        message: "Not able to create such expense. Try again!",
      });
      alert("Not able to create such expense. Try again!");
    }
  };

  return (
    <div
      className="flex flex-col lg:flex-row gap-2  bg-cover bg-center"
      style={{ backgroundImage: `url(${expenseImage})` }}
    >
      <Sidebar />
      <ExpenseForm
        submitFormData={submitFormData}
        getCategoryData={getCategoryData}
      />
    </div>
  );
}
