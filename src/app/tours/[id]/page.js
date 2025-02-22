import ReserveButton from "../ReserveButton";
import { serverFetch } from "@/app/core/services/http";
import moment from "moment-jalaali";
import ImageWrapper from "@/app/components/features/Image/ImageWrapper";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

async function TourDetailsPage({ params }) {
  const tourData = await serverFetch(`tour/${params.id}`, null, {
    cache: "no-store",
  });
  
  const startDate = new Date(tourData.startDate); 
  const endDate = new Date(tourData.endDate);
  const differenceMS = endDate - startDate;
  const differenceDays = differenceMS / (1000 * 60 * 60 * 24);

  const startDateShamsi = moment(tourData.startDate).format("jYYYY/jMM/jDD");
  const endDateShamsi = moment(tourData.endDate).format("jYYYY/jMM/jDD");

  return (
    <>
    <Header/>
      <div className="w-[390px] mx-auto sxs:justify-center xs:w-[320px] md:w-[75%] md:mt-[70px] md:border md:rounded-lg md:px-[20px] md:py-[10px]">
        <div className="md:flex">
        <div className="w-[330] justify-center">
          <ImageWrapper
              className="mx-auto sxs:w-[330px] h-[220px] xs:w-[320px] lg:w-96 h-64 pt-4 rounded-lg"
              src={tourData.image.startsWith("http") ? tourData.image : `http://localhost:6500/${tour.image}`}
              width={100}
              height={100}
              alt={tourData.title || "placeimg"}
          />
        </div>
        <div className="sxs:grid sxs:grid-flow-col sxs:place-items-center justify-between my-[15px] mx-auto xs:w-[320px]
         md:flex md:flex-col md:mr-0 md:pr-[15px] md:h-[130px] md:w-[60vw] md:items-start">
          <div className="md:mr-[50px] xs:flex xs:flex-row xs:justify-between xs:items-center md:flex-col md:items-start">
          <div>
          <h1 className="sxs:font-bold text-[24px] leading-[38px]">{tourData.title}</h1>
          </div>
          <div>
          <h1 className="numbers sxs:font-normal text-[15px] leading-[24px] text-gray-500">{differenceDays}شب {differenceDays-1}روز</h1>
          </div>
        </div>
        <div className="xs:flex xs:gap-[20px] md:flex md:flex-row xs:justify-around">
        <div className="flex flex-row items-center py-[20px] md:mr-[50px]">
            <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="user-tick.svg"/>
            <h1 className="text-gray-500 font-normal text-[12px] leading-[20px]">{tourData.options[0]}</h1>
          </div>
          <div className="flex flex-row items-center py-[20px]">
            <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="map.svg"/>
            <h1 className="text-gray-500 font-normal text-[12px] leading-[20px]">{tourData.options[1]}</h1>
          </div>
          <div className="flex flex-row items-center py-[20px]">
            <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="medal-star.svg"/>
            <h1 className="text-gray-500 font-normal text-[12px] leading-[20px]">{tourData.options[2]}</h1>
          </div>
        </div>
        <div className="sxs:hidden xs:hidden
         md:flex md:flex-row-reverse md:mt-[30px] md:mr-[60px] md:h-[50px] md:items-center md:justify-between md:w-full">
          <div className="md:ml-[40px]"><ReserveButton id={params.id}/></div>
          <div>
            <h1 className="numbers text-blue-400 font-bold text-[24px] leading-[38px]">{tourData.price} 
            <span className="text-gray-900 pr-[5px] font-normal text-[10px] leading-[16px]">تومان</span>
            </h1>
          </div>
        </div>
          </div>
        </div>
        <div className="grid grid-cols-3 sxs: xs:min-w-[320px] md:flex md:flex-row md:gap-[60px] md:justify-around md:mt-[40px]">
          <div className="flex flex-col items-center py-[20px] sxs:hidden xs:hidden md:flex">
            <h1 className="flex font-normal text-[12px] leading-[20px]">
              <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="bus.svg"/>مبدا</h1>
            <h1 className="font-normal text-[16px] leading-[25px]">{tourData.origin.name}</h1>
          </div>
          <div className="flex flex-col items-center py-[20px] sxs:hidden xs:hidden md:flex">
            <h1 className="flex font-normal text-[12px] leading-[20px]">
              <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="bus.svg"/>رفت</h1>
            <h1 className="font-normal text-[16px] leading-[25px] numbers">{startDateShamsi}</h1>
          </div>
          <div className="flex flex-col items-center py-[20px] sxs:hidden xs:hidden md:flex">
            <h1 className="flex font-normal text-[12px] leading-[20px]">
              <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="bus.svg"/>برگشت </h1>
            <h1 className="font-normal text-[16px] leading-[25px] numbers">{endDateShamsi}</h1>
          </div>
          <div className="flex flex-col items-center py-[20px]">
            <h1 className="flex font-normal text-[12px] leading-[20px]">
              <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="bus.svg"/>حمل و نقل</h1>
            <h1 className="font-normal text-[16px] leading-[25px]">{tourData.fleetVehicle}</h1>
          </div>
          <div className="flex flex-col items-center py-[20px]">
            <h1 className="flex font-normal text-[12px] leading-[20px]">
              <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="profile-2user.svg"/>ظرفیت</h1>
            <h1 className="numbers font-normal text-[16px] leading-[25px]">{tourData.availableSeats}</h1>
          </div>
          <div className="flex flex-col items-center py-[20px]">
            <h1 className="flex font-normal text-[12px] leading-[20px]">
              <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="security.svg"/>بیمه</h1>
            <h1 className="font-normal text-[16px] leading-[25px]">{tourData.insurance}</h1>
          </div>
        </div>
        <div className="w-[330px] sxs:grid grid-flow-col items-center xs:flex md:hidden">
          <div><ReserveButton id={params.id}/></div>
          <div>
            <h1 className="numbers text-blue-400 font-bold text-[24px] leading-[38px]">{tourData.price} 
            <span className="text-gray-900 pr-[5px] font-normal text-[10px] leading-[16px]">تومان</span>
            </h1>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default TourDetailsPage;