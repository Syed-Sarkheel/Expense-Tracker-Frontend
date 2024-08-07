import React from "react";
import Sidebar from "../../components/General/Sidebar";

export default function Transactions() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full">
      <Sidebar />
      <div className="w-full">
        <h1 className="text-4xl p-4 font-semibold ">
          View All your Transactions
        </h1>
        <div className="mt-5 w-2/3 flex mx-auto h-[40rem] bg-neutral-800"></div>
      </div>
    </div>
  );
}
