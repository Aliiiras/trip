"use client";
// post data to server
import { useCheckout } from "@/app/core/services/mutations";
// get data from server
import { useGetBasket } from "@/app/core/services/queries.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthProvider from "../core/providers/AuthProvider";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ImageWrapper from "../components/features/Image/ImageWrapper";
import toast from "react-hot-toast";

function CheckOutPage() {
  const { data, isPending } = useGetBasket(); // data of basket

  const { mutate } = useCheckout(); // destructure or extract mutate from usecheckout object

  const router = useRouter();

  const [traveler, setTraveler] = useState({
    fullName: "",
    nationalCode: "",
    birthDate: "",
    gender: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTraveler((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkoutHandler = async (e) => {
    e.preventDefault();
    //request for post data
    mutate(traveler, {
      onSuccess: (data) => {
        console.log(data);
        router.push("/payments?status=success"); //redirecting user
      },
      onError: (error) => {
        toast.error("اطلاعات را بطور کامل وارد نمایید.");
      },
    });
  };

  const night =
    (new Date(data?.data.startDate) - new Date(data?.data.endDate)) /
    (1000 * 60 * 60 * 24);
  const day = night - 1;

  if (!data) return;
  <div>
    <p>سبد خرید شما خالی است</p>
    <Link href="/">برو به صفحه اصلی</Link>
  </div>;
  return (
    <AuthProvider>
      <Header />
      {/* main div */}
      <div
        className="w-[60%] mx-auto
      xs: w-full xs:flex xs:flex-col
      md:flex-row 
      md: gap-[6px] my-[60px]">
        {/* passenger info div */}
        <div
          className="border border-gray-200 rounded-lg
        xs:min-w-[85%]
        md:min-w-[80%]">
          <h2
            className="xs: leading-[38px] font-normal
         lg: flex pr-4 py-8 text-[24px] 
         ">
            <ImageWrapper className="pl-4" src="profile-2user.svg" />
            مشخصات مسافر
          </h2>
          <form
            onSubmit={checkoutHandler}
            className="xs:flex flex-col items-center
         md:flex-row ">
            <input
              name="fullName"
              value={traveler.fullName}
              onChange={changeHandler}
              className="pr-2 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px] xs:my-[8px] ml-[20px] xs:w-[90%]"
              placeholder="نام و نام خانوادگی"
            ></input>
            <input
              name="nationalCode"
              value={traveler.nationalCode}
              onChange={changeHandler}
              className="pr-2 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px] xs:my-[8px] ml-[20px] xs:w-[90%]"
              placeholder="کد ملی"
            ></input>
            <input
              name="birthDate"
              value={traveler.birthDate}
              onChange={changeHandler}
              className="pr-2 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px] xs:my-[8px] ml-[20px] xs:w-[90%]"
              placeholder="تاریخ تولد"
            ></input>
            <select
              name="gender"
              value={traveler.gender}
              onChange={changeHandler}
              className="flex pr-2 my-8 mr-4 text-gray-400 border-2 rounded border-gray-200 w-[250px] h-[50px] xs:my-[10px] ml-[20px] xs:w-[90%]"
              placeholder="جنسیت"
            >
              <option value="" disabled>
                جنسیت
              </option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
          </form>
        </div>
        {/* trip info div */}
        <div
          className="xs:min-w-[85%] xs:flex xs:flex-col xs:items-center xs:justify-center md:min-w-[33%]
      md:flex md:flex-col md:gap-8 border border-gray-200 rounded-lg
      md:mr-0 md:ml-0 md:pb-[20px]
      ">
          <div
            className="
       lg: flex pt-4 justify-around border-b pb-4"
          >
            <h3
              className="
      lg: font-medium text-[26px] leading-8
      "
            >
              {data?.data?.title}
            </h3>
            <p
              className="numbers pr-2
      lg: text-gray-400 text-[16px] leading-8
      "
            >
              {night}
              <span> روز و </span> {day}
              <span> شب</span>
            </p>
          </div>
          <div
            className="py-2 xs:w-[90%]
      lg: flex items-center justify-around
      "
          >
            <span
              className="
       lg: pl-4 font-normal leading-10 font-normal
       "
            >
              قیمت نهایی
            </span>
            <p
              className="
       lg: text-[28px] text-blue-300
        numbers"
            >
              {data?.data?.price}
            </p>
            <span className="pr-4">تومان</span>
          </div>
          <button
            className="
      lg: bg-green-600 text-white rounded w-[90%] h-[55px] m-auto mb-2
      "
            onClick={checkoutHandler}
          >
            ثبت و خرید نهایی
          </button>
        </div>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default CheckOutPage;
