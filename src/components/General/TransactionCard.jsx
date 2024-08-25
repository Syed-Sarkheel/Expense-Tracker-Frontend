import { BiRupee } from "react-icons/bi";
import { GiExpense, GiMoneyStack } from "react-icons/gi";

export default function TransactionCard({
  description = "",
  category = "",
  amount = "",
  date = "",
  type = "",
}) {
  const css = "text-black text-2xl md:text-3xl m-auto p-auto";

  console.log(date);
  return (
    <div className="flex bg-neutral-800 shadow-sm shadow-neutral-400 mb-2 rounded-lg items-center justify-between h-fit w-full md:w-[80%] mx-auto p-3 md:p-5">
      <div className="flex items-center justify-center gap-3">
        <div
          title={category}
          className={`duration-500 w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-full
            bg-green-500
           flex items-center justify-center `}
        >
          {type === "income" ? (
            <GiMoneyStack className={css} />
          ) : (
            <GiExpense className={css} />
          )}
        </div>

        <div>
          <h5 className="text-2xl max-w-[12rem] overflow-x-hidden">
            {description}
          </h5>
          <p>Date: {date}</p>
        </div>
      </div>

      <p
        className={`text-xl items-center flex md:text-3xl text-center ${
          type === "income" ? "text-green-500" : "text-red-500"
        }`}
      >
        <BiRupee />
        {amount}
      </p>
    </div>
  );
}
