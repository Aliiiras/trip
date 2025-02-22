// import ImageWrapper from "next/ImageWrapper";
import { serverFetch } from "@/app/core/services/http";
import Header from "./components/layout/Header";
import ModalContainer from "./components/common/modal/ModalContainer";
import TourDetails from "./tours/TourCard";
import SearchTour from "./tours/SearchTour";
import Footer from "./components/layout/Footer";
import ImageWrapper from "./components/features/Image/ImageWrapper";

export default async function Home({ searchParams }) {
  ///fetching tour list (by card)
  const data = await serverFetch("tour", searchParams, { cache: "no-store" });
  return (
    <div>
      <div>
      <Header/>
      <ImageWrapper src="header-img.png" className="w-full"/>
      </div>
      <ModalContainer/>
      <SearchTour />
      <TourDetails toursData={data}/>
      <div className="sxs: mx-auto w-min-[327px] h-[200px] border rounded-lg xs:w-[320px] my-[50px]
       md:w-[95vw] md:h-[270px] md:flex">
        <div className="sxs:w-[327px] h-[127px] bg-green-600 xs:mx-auto rounded-t-lg
         md:h-[270px] md:w-[75vw] md:rounded-br-lg md:rounded-tl-none md:mr-0 md:ml-0">
          <div className="sxs:pt-[20px] pr-[15px]">
            <h1 className="text-white font-extrabold text-xl leading-[34px]
            md:leading-[48px] md:font-extrabold md:text-[48px] md:mr-[50px] md:mt-[40px]">خرید تلفنی از <span className="text-green-900 font-extrabold">تورینو</span></h1>
            <h4 className="text-white md:mr-[50px] md:font-normal md:text-[32px] md:leading-[50px]">به هرکجا که میخواهید!</h4>
          </div>
          <div className="relative">
            <ImageWrapper className="w-[195px] h-[158px] sxs:relative right-[135px] bottom-[109px] 
            xs:relative xs:right-[115px] bottom-[89px]
            md:w-[308px] md:h-[225px] md:right-[700px] md:bottom-[-112px] md:absolute
            " src="cartoon-man.png" width={225} height={308} alt="man"/>
          </div>
        </div>
        <div className="flex flex-row justify-around my-[10px]
         md:justify-center md:mx-auto md:items-center md:flex-col">
          <div className="flex relative right-[10px] top-[5px] items-center
          md:justify-center md:mx-auto md:h-[100px]">
            <h2><span className="numbers
            md:leading-[45px] md:font-bold md:text-[28px]">021-1840
            </span></h2>
            <ImageWrapper className="sxs:w-[20px] h-[20px]" src="call.png" width={25} height={15} alt="call"/>
          </div>
            <button className="w-[136px] h-[38px] bg-green-800 text-white rounded-lg relative sxs: left-[10px] top-[5px]
             md:left-[0]">
            اطلاعات بیشتر
            </button>
        </div>
      </div>
          <div className="md:w-[90%] md:mx-auto md:items-center">
            <div className="flex items-center mr-[40px] my-[15px] 
            md:h-[675px] md:w-[600px] md:flex-col md:justify-center">
              <div className="mx-auto md:mr-0">
              <h3 className="font-extrabold text-lg leading-[40px]
              md:leading-[63px] md:text-[40px] md:font-extrabold
              ">چرا <span className="text-green-700">تورینو </span>؟</h3>
              </div>
              <div className="xs:hidden sxs:hidden md:block">
              <h4 className="md:leading-[40px] md:font-medium md:text-[24px]">تور طبیعت گردی و تاریخی </h4>
              <h5 className="md:leading-[44px] md:font-normal md:text-[20px] md:text-justify">
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.
              </h5>
              </div>
            </div>
            <div>
              {/* <Slider />   */}
            </div>
          </div>
          <hr></hr>
        <div className="xsx: my-8 grid grid-col-2 mx-auto justify-center md:flex md:justify-around">
          <div className="flex flex-row gap-[20px] my-[20px] items-center">
            <div>
              <ImageWrapper  alt="16" src="Group 16.png" width={50} height={50} alt="fair-price"/>
            </div>
            <div>
              <h3 className="md:font-medium md:leading-[40px] md:text-[26px]">بصرفه ترین قیمت</h3>
              <h5 className="md:font-light md:leading-[25px] md:text-[16px]">بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</h5></div>
            </div>
          <div className="flex flex-row gap-[20px] my-[20px] items-center">
            <div>
              <ImageWrapper  alt="17" src="Group 17.png" width={50} height={50} alt="supporting"/>
            </div>
            <div>
              <h3 className="md:font-medium md:leading-[40px] md:text-[26px]">پشتیبانی</h3>
              <h5 className="md:font-light md:leading-[25px] md:text-[16px]">پشتیبانی و همراهی<span className="numbers">24</span>  ساعته در تمامی مراحل سفر شما.</h5>
            </div>
          </div>
          <div className="flex flex-row gap-[20px] my-[20px] items-center">
            <div>
              <ImageWrapper  alt="18" src="Group 18.png" width={50} height={50} alt="customers-happiness"/>
            </div>
            <div>
              <h3 className="md:font-medium md:leading-[40px] md:text-[26px]">رضایت کاربران</h3>
              <h5 className="md:font-light md:leading-[25px] md:text-[16px]">رضایت بیش از <span className="numbers">10</span> هزار کاربر از تور های ما. </h5>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}
