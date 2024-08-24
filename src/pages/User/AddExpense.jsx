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

  const submitFormData = (sendData) => {
    var data;
    if (sendData?.newCategory) {
      CreateCategory({ name: sendData.category })
        .then((res) => {
          setCategoryResponse(res);
          data = res;
        })
        .catch((err) => {
          console.log(err);
          setCategoryResponse({
            data: null,
            err: true,
            message: "Not able to create such category. Try again!",
          });
          alert("Not able to create such category. Try again!");
        });
      if (categoryResponse?.data?._id) {
        SubmitExpense({
          category: categoryResponse?.data?._id,
          date: sendData?.expenseDate,
          amount: sendData?.amount,
          description: sendData?.description,
        })
          .then((res) => {
            setExpenseResponse(res);
            data = res;
            alert(res?.message);
          })
          .catch((err) => {
            console.log(err);
            setExpenseResponse({
              data: null,
              err: true,
              message: "Not able to create such expense. Try again!",
            });
            alert("Not able to create such expense. Try again!");
          });
      }
    } else {
      SubmitExpense({
        category: sendData?.category?.value,
        date: sendData?.expenseDate,
        amount: sendData?.amount,
        description: sendData?.description,
      })
        .then((res) => {
          setExpenseResponse(res);
          data = res;
          alert(res?.message);
        })
        .catch((err) => {
          console.log(err);
          setExpenseResponse({
            data: null,
            err: true,
            message: "Not able to create such expense. Try again!",
          });
          alert("Not able to create such expense. Try again!");
        });
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
