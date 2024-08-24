import { useEffect, useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import TransactionCard from "../../components/General/TransactionCard";
import useGetData from "../../hooks/useGetData";

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [transactionList, setTransactionList] = useState([]);
  const [transactions, setTransactions] = useState(transactionList);

  const { data, error, message } = useGetData("/balance/transactions", []);

  useEffect(() => {
    if (data) {
      // Sort transactions based on date
      const sortedData = [...data].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setTransactionList(sortedData || []);
    }
  }, [data]);

  useEffect(() => {
    const list = transactionList.filter((transaction) => {
      return (
        transaction?.category
          ?.toLocaleLowerCase()
          ?.startsWith(search?.toLocaleLowerCase()) ||
        transaction?.description
          ?.toLocaleLowerCase()
          ?.startsWith(search?.toLocaleLowerCase())
      );
    });
    setTransactions(list);
  }, [search, transactionList, setTransactionList]);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full">
        <h3 className="text-3xl text-[#FCF8D9] my-5 font-semibold ml-[10%] mt-10">
          View Transactions
        </h3>
        <div className="ml-[10%] w-[80%] flex justify-between flex-wrap mb-16 items-center">
          <h5 className="text-xl text-[#FFE600]">Description</h5>
          <input
            type="search"
            value={search}
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}
            className="py-2 px-3 text-white bg-neutral-800 outline-none rounded-lg"
          />
        </div>
        <div className="w-3/4 mx-auto rounded-lg">
          {transactions?.map((transaction) => (
            <TransactionCard
              key={transaction?._id}
              description={transaction?.description || transaction?.category}
              date={transaction?.date}
              category={transaction?.category}
              amount={transaction?.amount}
              type={transaction?.type}
            />
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
