"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { personalInfoSchema } from "@/app/core/utils/validations/schema";
import { useUpdatePersonalInfo } from "@/app/core/services/mutations";
import toast from "react-hot-toast";

function PersonalInfo() {
  const { mutate, isPending } = useUpdatePersonalInfo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInfoSchema),
  });

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
        },
        onError: (error) => {},
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="*:border-2 *:border-gray-200 *:rounded-lg *:p-1 md:w-[65vw]"
    >
    <div className="border-2 border-gray-300">
      <h1 className="leading-[25px] font-normal text-[16px] mr-4 my-4">ویرایش اطلاعات شخصی</h1>
      <input {...register("shaba_code")} placeholder="نام و نام خانوادگی" 
      className="border border-gray-300 rounded-md px-[5px] py-[4px] xs:w-[95%] my-2 mx-2 md:w-[20vw]"/>
      {!!errors?.shaba_code && <span>{errors?.shaba_code?.message}</span>}
      <input {...register("debitCard_code")} placeholder="کد ملی" 
      className="border border-gray-300 rounded-md px-[5px] py-[4px] xs:w-[95%] my-2 mx-2 md:w-[20vw]"/>
      {!!errors?.debitCard_code && (
        <span className="text-red-500 text-sm min-h-[20px] block">{errors?.debitCard_code?.message}</span>
      )}
      <select {...register("debitCard_code")}
      className="border border-gray-300 rounded-md px-[5px] py-[4px] text-gray-400 xs:w-[95%] my-2 mx-2 md:w-[20vw]">
      <option value="">انتخاب کنید</option>
      <option value="male" >مرد</option>
      <option value="female">زن</option>
      </select>

      <input {...register("accountIdentifier")} placeholder="تاریخ تولد" 
      className="border border-gray-300 rounded-md px-[5px] py-[4px] xs:w-[95%] my-2 mx-2 md:w-[20vw]"/>
      {!!errors?.accountIdentifier && (
        <span className="text-red-500 text-sm min-h-[20px] block">{errors?.accountIdentifier?.message}</span>
      )}

      <input {...register("accountIdentifier")} placeholder="ایمیل" 
            className="border border-gray-300 rounded-md px-[5px] py-[4px] xs:w-[95%] my-2 mx-2 md:w-[20vw]"/>
            {!!errors?.accountIdentifier && (
              <span className="text-red-500 text-sm min-h-[20px] block">{errors?.accountIdentifier?.message}</span>
            )}

      <div className="flex justify-between">
      <input
        type="submit" 
        value="تایید"
        className="!bg-green-600 p-2 text-white !border-0 rounded-md w-[138px] h-[40px] xs:mx-2 my-2 "
      />
      <input
        // type="submit" 
        value="انصراف"
        className=" p-2 text-green-600 !border-2 border-green-600 rounded-md w-[138px] h-[40px] text-center xs:mx-2 my-2 "
      />
      </div>
      </div>
    </form>
  );
}

export default PersonalInfo;