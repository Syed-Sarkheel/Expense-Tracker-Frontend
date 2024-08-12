import { useEffect, useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import TransactionCard from "../../components/General/TransactionCard";

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [transactionList, setTransactionList] = useState([
    {
      _id: "123",
      amount: 5000,
      category: "Rent",
      description: "Rent",
      date: "2024-03-15",
    },
    {
      _id: "124",
      amount: 6000,
      category: "Rent",
      description: "Rent",
      date: "2024-03-15",
    },
    {
      _id: "128",
      amount: 8000,
      category: "Food",
      description: "Food",
      date: "2024-03-15",
    },
    {
      _id: "129",
      amount: 7000,
      category: "Party",
      description: "Party",
      date: "2024-03-15",
    },
    {
      _id: "130",
      amount: 8000,
      category: "Food",
      description: "Food",
      date: "2024-03-15",
    },
  ]);
  const [transactions, setTransactions] = useState(transactionList);

  useEffect(() => {
    function updateTransactions() {
      const list = transactionList?.filter((transaction) => {
        if (
          transaction?.category
            ?.toLocaleLowerCase()
            ?.startsWith(search?.toLocaleLowerCase()) ||
          transaction?.description
            ?.toLocaleLowerCase()
            ?.startsWith(search?.toLocaleLowerCase())
        )
          return transaction;
      });
      setTransactions(list);
    }

    updateTransactions();
  }, [search, transactionList, transactions]);

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
            className="py-2 px-3 text-black outline-none rounded-full"
          />
        </div>
        <div className="w-3/4 mx-auto rounded-lg">
          {transactions?.map((transaction) => (
            <TransactionCard
              key={transaction?._id}
              description={transaction?.description}
              date={transaction?.date}
              category={transaction?.category}
              amount={transaction?.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
