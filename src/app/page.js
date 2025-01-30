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
      <ModalContainer />
      <SearchTour />
      <TourDetails toursData={data}/>
      <div className="sxs: mx-auto w-[327px] h-[200px] border rounded-lg xs:w-[320px] my-[50px]">
        <div className="sxs:w-[327px] h-[127px] bg-green-600 mx-auto rounded-lg">
          <div className="sxs:pt-[20px] pr-[15px]">
            <h1 className="text-white font-extrabold text-xl leading-[34px]">خرید تلفنی از <span className="text-green-900 font-extrabold">تورینو</span></h1>
            <h4 className="text-white">به هرکجا که میخواهید!</h4>
          </div>
          <div >
            <ImageWrapper className="w-[195px] h-[158px] sxs:relative right-[135px] bottom-[109px] xs:relative right-[120px] bottom-[89px]" src="cartoon-man.png" width={225} height={308} alt="man"/>
          </div>
        </div>
        <div className="flex flex-row justify-around my-[10px] mx-[10px]">
          <div className="flex relative right-[10px] top-[5px] items-center">
            <h2><span className="numbers">021-1840
            </span></h2>
            <ImageWrapper className="sxs:w-[20px] h-[20px]" src="call.png" width={25} height={15} alt="call"/>
          </div>
            <button className="w-[136px] h-[38px] bg-green-800 text-white rounded-lg relative sxs: left-[10px] top-[5px]">
            اطلاعات بیشتر
            </button>
        </div>
      </div>
          <div>
            <div className="flex items-center mr-[40px] my-[15px]">
              <h3 className="font-extrabold text-lg leading-[40px]">چرا <span className="text-green-600">تورینو </span>؟</h3>
              <div className="xs:hidden sxs:hidden">
              <h4>تور طبیعت گردی و تاریخی </h4>
              <h5>
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.
              </h5>
              </div>
            </div>
            <div>
              {/* <Slider />   */}
            </div>
          </div>
          <hr></hr>
        <div className="xsx: my-8 grid grid-col-2 mx-auto justify-center">
          <div className="flex flex-row gap-[20px] my-[20px] items-center">
            <div>
              <ImageWrapper  alt="16" src="Group 16.png" width={50} height={50} alt="o"/>
            </div>
            <div>
              <h3>بصرفه ترین قیمت</h3>
              <h5>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</h5></div>
            </div>
          <div className="flex flex-row gap-[20px] my-[20px] items-center">
            <div>
              <ImageWrapper  alt="17" src="Group 17.png" width={50} height={50} alt="i"/>
            </div>
            <div>
              <h3>پشتیبانی</h3>
              <h5>پشتیبانی و همراهی<span className="numbers">24</span>  ساعته در تمامی مراحل سفر شما.</h5>
            </div>
          </div>
          <div className="flex flex-row gap-[20px] my-[20px] items-center">
            <div>
              <ImageWrapper  alt="18" src="Group 18.png" width={50} height={50} alt="u"/>
            </div>
            <div>
              <h3>رضایت کاربران</h3>
              <h5>رضایت بیش از <span className="numbers">10</span> هزار کاربر از تور های ما. </h5>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}
