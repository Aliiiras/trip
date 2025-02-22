"use client"
import { useGetUserTransactions } from "@/app/core/services/queries";

function TransactionsPage() {
  const {data,isPending} = useGetUserTransactions();
  console.log(data?.data);
  if (isPending) return <p>Loading</p>;
  return (
    <div className="overflow-hidden">
      <table className="table-auto text-center w-full xs:w-[95%] mx-auto border rounded-lg border-separate border-spacing-0 mb-[10px] md:w-[65vw]">
        <thead className="h-[60px] bg-gray-100">
          <tr>
            <th className="w-[24%]">تاریخ</th>
            <th className="w-[20%]">ساعت</th>
            <th className="w-[28%]">مبلغ</th>
            <th className="w-[28%]">نوع خرید</th>
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
              <tr key={transaction.id} className="h-[50px]">
                <td>{persianDate}</td>
                <td>{persianTime}</td>
                <td className="numbers">{transaction.amount}</td>
                <td className="xs:hidden">{transaction.type}</td>
                <td>{transaction.id.slice(-10)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsPage