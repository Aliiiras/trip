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
import ImageWrapper from "../components/features/Image/ImageWrapper"

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
    <div className="mx-auto
      xs: w-full flex flex-col
      lg: flex gap-[6px] w-[80%] my-[40px] gap-4">
      <div className="w-[70%] m-auto border-2 border-gray-200 rounded-lg
        xs: min-w-[320px]
        lg:  my-[20px]
        ">
        <h2 className="xs: leading-[38px] font-normal
         lg: flex pr-4 py-8 text-[24px] 
         "><ImageWrapper className="pl-4" src="profile-2user.svg"/>مشخصات مسافر</h2>
        <form onSubmit={checkoutHandler}>
        <input name="fullName" value={traveler.fullName} onChange={changeHandler} className="pr-2 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px] xs:my-[8px]" placeholder="نام و نام خانوادگی"></input>
        <input name="nationalCode" value={traveler.nationalCode} onChange={changeHandler} className="pr-2 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px] xs:my-[8px]" placeholder="کد ملی"></input>
        <input name="birthDate" value={traveler.birthDate} onChange={changeHandler} className="pr-2 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px] xs:my-[8px]" placeholder="تاریخ تولد"></input>
        <select name="gender" value={traveler.gender} onChange={changeHandler} className="flex pr-2 my-8 pr-8 mr-4 border-2 rounded border-gray-200 w-[250px] h-[50px] xs:my-[10px]" placeholder="جنسیت">
          <option value="" disabled>جنسیت</option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>
        </form>
        </div>
      <div className="xs:mx-auto w-[320px]
      lg: flex flex-col gap-8 w-[30%] h-[270px] border-2 border-gray-200 rounded-lg
      ">
      <div className="
       lg: flex pt-4 justify-around">
      <h3 className="
      lg: font-medium text-[26px] leading-8
      ">{data?.data?.title}</h3>
      <p className="numbers 
      lg: text-gray-400 text-[16px] leading-8
      ">{night}<span> روز و </span> {day}<span> شب</span></p>
      </div>
      <hr className="
      lg: border-dashed border border-gray-200
      "></hr>
      <div className="
      lg: flex items-center justify-around
      ">
      <span className="
       lg: pl-4 font-normal leading-10 font-normal
       ">قیمت نهایی</span>
      <p className="
       lg: text-[28px] text-blue-300
        numbers">{data?.data?.price}</p>
      <span className="pr-4">تومان</span>
      </div>      
      <button className="
      lg: bg-green-600 text-white rounded w-[90%] h-[55px] m-auto
      " onClick={checkoutHandler}>ثبت و خرید نهایی</button>
      </div>
    </div>
    <Footer/>
    </AuthProvider>
  );
}

export default CheckOutPage;