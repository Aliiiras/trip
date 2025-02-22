"use client";

import { useGetUserTours } from "@/app/core/services/queries";

function MyToursPage() {
  const { data, isPending } = useGetUserTours(); //get user's tour
  console.log(data);

  if (isPending) return <p>Loading</p>;

  return (
    <div className=" w-[%100] xs:py-[10px] px-[8px] mb-[8px] md:w-[65vw] md:flex md:flex-col md:h-auto md:justify-end md:mr-auto md:pl-[20px] md:py-0 md:border-2 md:rounded-lg md:py-[20px] md:px-[15px]">
      {data?.data?.map((tour) => (
        <div
          key={tour.id}
          className="h-auto border-2 rounded-xl border-gray-200 w-[100%] px-[10px] py-[15px] mb-[8px]"
        >
          <div className="flex relative">
            <div className="w-[50%] flex-col mr-[25px] mb-[20px]">
              <h1 className=" mb-[20px]">{tour.title}</h1>
              <h1 className=" xs:flex flex-row w-full">
                <span>
                  {tour.destination.namefa} به {tour.origin.namefa}
                </span>
                <span className="text-gray-500">
                  {" "}
                  {tour.startDate.split("T")[0]}
                </span>
              </h1>
            </div>
            <div className="w-[50%] justufy-between">
              <h1 className="mb-[20px]">
                <span>سفر با </span>
                {tour.fleetVehicle}
              </h1>
              <h1>
                <span>تاریخ برگشت </span>
                <span className="text-gray-500">
                  {tour.endDate.split("T")[0]}
                </span>
              </h1>
            </div>
            <span
              className={`absolute top-0 left-2 whitespace-nowrap inline-block min-w-[75px] max-w-fit h-[30px] py-1 rounded-lg text-sm text-center
                ${
                  new Date() < new Date(tour.startDate)
                    ? "bg-blue-300 text-blue-700"
                    : new Date() > new Date(tour.endDate)
                    ? "bg-green-300 text-green-700"
                    : "bg-yellow-300 text-yellow-700"
                }
              `}
            >
              {new Date() < new Date(tour.startDate)
                ? "آینده"
                : new Date() > new Date(tour.endDate)
                ? "به اتمام رسیده"
                : "در حال برگزاری"}
            </span>
          </div>
          <hr></hr>
          <div className="items-center justify-center mr-[25px] py-[15px] numbers">
            <h3>
              <span className="text-gray-400">مبلغ پرداخت شده </span>
              {tour.price} <span className="text-gray-400">تومان </span>
            </h3>
            <h3></h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyToursPage;
