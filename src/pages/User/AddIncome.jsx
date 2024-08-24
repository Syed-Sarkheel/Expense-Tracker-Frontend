import React, { useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import expenseImage from "../../assets/addexpense.svg";
import IncomeForm from "../../components/Forms/IncomeForm";
import usePostData from "../../hooks/usePostData";

export default function AddIncome() {
  const submitIncome = usePostData("/income");
  const [income, setIncome] = useState({
    data: null,
    error: null,
    message: null,
  });
  const submitForm = (sendData) => {
    var data;
    submitIncome({
      category: sendData?.category,
      date: sendData?.incomeDate,
      amount: sendData?.amount,
      description: sendData?.description,
    })
      .then((res) => {
        setIncome(res);
        data = res;
        alert(res?.message);
      })
      .catch((err) => {
        console.log(err);
        setIncome({
          data: null,
          err: true,
          message: "Not able to create such income. Try again!",
        });
        alert("Not able to create such income. Try again!");
      });
    console.log(income, data);
  };
  return (
    <div
      className="flex flex-col lg:flex-row gap-2 bg-cover bg-center"
      style={{ backgroundImage: `url(${expenseImage})` }}
    >
      <Sidebar />
      <IncomeForm submitFormData={submitForm} />
    </div>
  );
}
