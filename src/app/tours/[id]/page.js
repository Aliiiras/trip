import ReserveButton from "../ReserveButton";
import ProfileLayout from "@/app/profile/layout";
import { serverFetch } from "@/app/core/services/http";
import moment from "moment-jalaali";
import ImageWrapper from "@/app/components/features/Image/ImageWrapper";

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
    <ProfileLayout>
      <div className="w-[390px] sxs:mx-auto justify-center">
        <div className="w-[330] mx-auto">
          <ImageWrapper
              className="sxs:w-[330px] h-[220px] mx-auto lg:w-96 h-64 pt-4 rounded-lg"
              src={tourData.image.startsWith("http") ? tourData.image : `http://localhost:6500/${tour.image}`}
              width={100}
              height={100}
              alt={tourData.title || "placeimg"}
          />
        </div>
        <div className="sxs:w-[330px] grid grid-flow-col place-items-center justify-between my-[15px] mx-auto">
          <div>
          <h1 className="sxs:font-bold text-[24px] leading-[38px]">{tourData.title}</h1>
          </div>
          <div>
          <h1 className="numbers sxs:font-normal text-[15px] leading-[24px] text-gray-500">{differenceDays}شب {differenceDays-1}روز</h1>
          </div>
        </div>
        <div className="sxs:grid grid-cols-3">
          <div className="flex flex-row items-center py-[20px]">
            <ImageWrapper className="w-[14px]font-normal text-[13px] leading-[20px]" width={20} height={20} alt="image" src="user-tick.svg"/>{tourData.options[0]}
          </div>
          <div className="flex flex-row items-center py-[20px]">
            <ImageWrapper className="w-[14px]font-normal text-[13px] leading-[20px]" width={20} height={20} alt="image" src="map.svg"/>{tourData.options[1]}
          </div>
          <div className="flex flex-row items-center py-[20px]">
            <ImageWrapper className="w-[14px]font-normal text-[13px] leading-[20px]" width={20} height={20} alt="image" src="medal-star.svg"/>{tourData.options[2]}
          </div>
          
          <div className="flex flex-col items-center py-[20px]">
            <h1 className="flex"><ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="bus.svg"/>حمل و نقل</h1>
            <h1 className="">{tourData.fleetVehicle}</h1>
          </div>
          <div className="flex flex-col items-center py-[20px]">
            <h1 className="flex">
            <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="profile-2user.svg"/>ظرفیت</h1>
            <h1 className="numbers">{tourData.availableSeats}</h1>
          </div>
          <div className="flex flex-col items-center py-[20px]">
          <h1 className="flex">
            <ImageWrapper className="w-[14px]" width={20} height={20} alt="image" src="security.svg"/>بیمه</h1>
          <h1 className="">{tourData.insurance}</h1>
          </div>
        </div>
        <div className="w-[330px] grid grid-flow-col mx-auto items-center justify-between">
          <div><ReserveButton/></div>
          <div>
            <h1 className="numbers text-blue-400 font-bold text-[24px] leading-[38px]">{tourData.price} 
            <span className="text-gray-900 pr-[5px] font-normal text-[10px] leading-[16px]">تومان</span>
            </h1>
            </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default TourDetailsPage;