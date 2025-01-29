"use client"
import {useGetUserTransactions} from "@/core/services/queries";

function TransactionsPage() {
  const {data,isPending} = useGetUserTransactions();
  console.log(data?.data);
  if (isPending) return <p>Loading</p>;
  return (
    <div>
      <table className="table-auto text-center w-full">
        <thead className="h-[40px] bg-gray-200">
          <tr>
            <th className="w-[20%]">تاریخ</th>
            <th className="w-[20%]">ساعت</th>
            <th className="w-[30%]">مبلغ</th>
            <th className="w-[30%]">نوع خرید</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((transaction) => {
            const persianDate = new Date(transaction.createdAt).toLocaleDateString("fa-IR");
            const persianTime = new Date(transaction.createdAt).toLocaleTimeString("fa-IR", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            });

            return (
              <tr key={transaction.id} className="h-[35px]">
                <td>{persianDate}</td>
                <td>{persianTime}</td>
                <td className="numbers">{transaction.amount}</td>
                <td>{transaction.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsPage