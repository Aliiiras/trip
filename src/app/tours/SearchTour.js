"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import QueryString from "qs";

import { useGetTours } from "@/app/core/services/queries";
import { DateToIso,flattenObject } from "@/app/core/utils/helper";
import { useRouter } from "next/navigation";
import useQuery from "@/app/core/hooks/query";

function SearchTour() {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const { getQuery } = useQuery();
  const { data, isPending, refetch } = useGetTours(query);
  const { register, handleSubmit,control, reset } = useForm();
    useEffect(() => {
      const originId = getQuery("originId");
      const destinationId = getQuery("destinationId");
      if (originId && destinationId) reset({originId, destinationId})
    }, []);
  
    const submitHandler = (form) => {
      // setQuery(flattenObject(form));
      const query = QueryString.stringify(flattenObject(form));
      router.push(`/?${query}`);
    };
  
    return (
    <>
    <h3 className="font-semibold text-lg leading-[25px] text-center py-[20px]"><span className="text-green-600">تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی</h3>
      <form
        className="w-full max-w-[370px] md:max-w-[800px] mx-auto flex flex-col md:flex-row border-2 border-gray-200 rounded-lg py-[8px] min-h-[70px] items-center px-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex mb-[15px] md:my-auto mx-[8px] gap-2">
        <select className="w-[160px] h-[50px] rounded-lg border border-gray-200 mx-auto" {...register("originId")}>
        <option disabled defaultValue="">مبدا</option>
          <option value="1">تهران</option>  
          <option value="2">سنندج</option>
          <option value="3">مادرید</option>
          <option value="4">اصفهان</option>
          <option value="5">سلیمانیه</option>
          <option value="6">هویلر</option>
          <option value="7">مازندران</option>
          <option value="8">آفرود</option>
          <option value="9">رم</option>
          <option value="10">کیش</option>
          <option value="11">شیراز</option>
  
        </select>
        <select className="w-[160px] h-[50px] rounded-lg border border-gray-200 mx-auto" {...register("destinationId")}>
        <option disabled defaultValue="">مقصد</option>
          <option value="11">شیراز</option>
          <option value="10">کیش</option>
          <option value="9">رم</option>
          <option value="8">آفرود</option>
          <option value="7">مازندران</option>
          <option value="6">هویلر</option>
          <option value="5">سلیمانیه</option>
          <option value="4">اصفهان</option>
          <option value="3">مادرید</option>
          <option value="2">سنندج</option>
        <option value="1">تهران</option>  
        </select>
        </div>
        <Controller
        control={control}
        name="date"
        render={({ field: { onChange } }) => (
            <div>
              <DatePicker
            inputClass="!text-black pr-0 md:!h-[50px] !w-[220px] !rounded-lg !border-gray-200 border !ml-2"
            round="x2"
            accentColor="#28A745"
            onChange={(e) =>
              onChange({
                startDate: DateToIso(e.from),
                endDate: DateToIso(e.to),
              })
            }
            range
          />
            </div>
        )}
      />
        <input className="bg-green-600 my-[20px] mx-auto text-white rounded-lg w-[330px] h-[50px] md:w-[190px]" type="submit" value="جستجو"/>
      </form>
      </>
    );
  }
  
  export default SearchTour;