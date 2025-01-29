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

function CheckOutPage() {
  const { data, isPending } = useGetBasket(); // data of basket
  
  const { mutate } = useCheckout(); // destructure or extract mutate from usecheckout object

  const router = useRouter();

  const [traveler,setTraveler] = useState({
    fullName:"",
    nationalCode:"",
    birthDate:"",
    gender:"",
  }
  );

  const changeHandler = (e) => {
    const {name,value} = e.target;
    setTraveler((prev) =>({

    ...prev,
    [name]:value,
    }))
  };

  const checkoutHandler = async(e) => {
    e.preventDefault();
    //request for post data
    mutate(traveler, {
      onSuccess: (data) => {
        console.log(data);  
        router.push("/payments?status=success"); //redirecting user
      },
      onError: (error) => {
        console.error("Error:", error);
      },
    });
  };

  const night = (new Date(data?.data.endDate) - new Date(data?.data.startDate)) / (1000 * 60 * 60 * 24);
  const day = night-1;

  if (!data) return 
  <div>
    <p>سبد خرید شما خالی است</p>
    <Link href="/">برو به صفحه اصلی</Link>
  </div>
  return (
    <AuthProvider>
      <Header/>
    <div className=" flex gap-[6px] w-[80%] m-auto my-[40px] gap-4">
      <div className=" w-[70%] m-auto border-2 border-gray-200 rounded-lg my-[40px]">
        
        <h2 className=" flex pr-4 py-8 text-[24px] "><img className="pl-4" src="/ico/profile-2user.svg"></img>مشخصات مسافر</h2>
        <form onSubmit={checkoutHandler}>
        <input name="fullName" value={traveler.fullName} onChange={changeHandler} className="pr-2 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px]" placeholder="نام و نام خانوادگی"></input>
        <input name="nationalCode" value={traveler.nationalCode} onChange={changeHandler} className="pr-2 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px]" placeholder="کد ملی"></input>
        <input name="birthDate" value={traveler.birthDate} onChange={changeHandler} className="pr-2 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px]" placeholder="تاریخ تولد"></input>
        <select name="gender" value={traveler.gender} onChange={changeHandler} className="flex pr-2 my-8 pr-8 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px]" placeholder="جنسیت">
          <option value="" disabled>انتخاب کنید</option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>
        </form>
        </div>
      <div className="flex flex-col gap-8 w-[30%] h-[270px] border-2 border-gray-200 rounded-lg my-[40px]">
      <div className=" flex pt-4 justify-around">
      <h3 className="font-medium text-[26px] leading-8">{data?.data?.title}</h3>
      <p className="numbers text-gray-400 text-[16px] leading-8">{night}<span> روز و </span> {day}<span> شب</span></p>
      </div>
      <hr className="border-dashed border border-gray-200"></hr>
      <div className="flex items-center justify-around">
      <span className=" pl-4 font-normal leading-10 font-normal">قیمت نهایی</span>
      <p className=" text-[28px] text-blue-300 numbers">{data?.data?.price}</p>
      <span className="pr-4">تومان</span>
      </div>      
      <button className="bg-green-600 text-white rounded w-[90%] h-[55px] m-auto" onClick={checkoutHandler}>ثبت و خرید نهایی</button>
      </div>
      
      
    </div>
    <Footer/>
    </AuthProvider>
  );
}

export default CheckOutPage;