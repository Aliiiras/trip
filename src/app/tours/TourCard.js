
import Image from "next/image"
// import LotAnim from "../../public/ico/anim.js";
import Link from "next/link";

function TourCard({ toursData = [] }) {
  if (!toursData.length) return (
    <div className="flex flex-col items-center text-2xl font-bold my-32">
      <div className="w-48 h-48">
        {/* <LotAnim/> */}
      </div>
      <p className="mt-4">متاسفانه نتیجه‌ای یافت نشد</p>
    </div>
  );
  return (
<div className="">
      <h2 className="text-[20px] leading-[31px] font-normal mr-[70px] my-[20px]">همه تورها</h2>
    <div>
      {toursData?.map((tour) => (
          <div key={tour.id} className="w-[330px] h-[277px] mx-auto mb-[20px] border rounded-xl">
          {tour.image && (
          <Image
            className="w-[330px] h-[159px] rounded"
            src={tour.image.startsWith("http") ? tour.image : `http://localhost:6500/${tour.image}`}
            width={100}
            height={100}
            alt={tour.title || "placeimg"}
          />
        )}
        <div>
          <h3 className="font-normal text-[22px] leading-[34px] mr-[15px] mt-[10px]">{tour.title}</h3>
          <div className="mr-[15px] mb-[5px]">
            <span className="text-gray-400 text-[15px] font-normal leading-[25px]">{tour.options[0]} - </span>
            <span className="text-gray-400 text-[15px] font-normal leading-[25px]">{tour.options[1]} - </span>
            <span className="text-gray-400 text-[15px] font-normal leading-[25px]">{tour.options[2]}</span>
          </div>
        </div>  
          <hr></hr>
        <div className="flex flex-row justify-between items-center mx-[20px] mt-[5px]">
          <Link href={`/tours/${tour?.id}`} className="bg-yellow-500 px-4 py-1 rounded text-white w-[99px] h-[30px] text-center">رزرو</Link>
          <h6 className="numbers text-blue-500">{tour.price} <span className="text-gray-900">تومان</span></h6>
        </div>
          </div>
      ))}
    </div>
    </div>


  );
}

export default TourCard;