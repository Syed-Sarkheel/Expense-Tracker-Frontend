import { SiCodenewbie } from "react-icons/si";

export default function TransactionCard({
  description = "",
  category = "",
  amount = "",
  date = "",
}) {
  const css = "text-black text-2xl md:text-3xl m-auto p-auto";

  console.log(date);
  return (
    <div className="flex bg-neutral-800 shadow-sm shadow-neutral-400 mb-2 rounded-lg items-center justify-between h-fit w-full md:w-[80%] mx-auto p-3 md:p-5">
      <div className="flex items-center justify-center gap-3">
        <div
          title={category}
          className={`duration-500 w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-full
            bg-[#51D289]
           flex items-center justify-center `}
        >
          <SiCodenewbie className={css} />
        </div>
        <div>
          <h5 className="text-2xl max-w-[9rem] overflow-x-hidden">
            {description}
          </h5>
          <p>Date: {date}</p>
        </div>
      </div>
      <h4 className="text-xl md:text-3xl text-center">{amount}</h4>
    </div>
  );
}
