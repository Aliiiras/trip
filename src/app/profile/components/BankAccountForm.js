"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { bankAcountSchema } from "@/app/core/utils/validations/schema";
import { useUpdateBankAccount} from "@/app/core/services/mutations"
import toast from "react-hot-toast";

function BankAccountForm() {
  const { mutate, isPending } = useUpdateBankAccount();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAcountSchema),
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
      className="*:border-2 *:border-gray-200 *:rounded-lg *:mt-2 *:p-1 md:w-[65vw]"
    >
    <div className="border-2 border-gray-300">
      <h1 className="leading-[25px] font-normal text-[16px] mr-4 my-4">ویرایش اطلاعات حساب بانکی</h1>
      <div className="flex md:flex-row xs:flex-col md:h-[65px]">
      <div className="flex flex-col h-[60px]">
        <input {...register("shaba_code")} placeholder="شماره شبا" 
        className="border border-gray-300 rounded-md px-[5px] py-[4px] xs:w-[95%] my-2 mx-2 md:w-[18vw]"/>
        {!!errors?.shaba_code && <span className="whitespace-nowrap mr-[15px] -mt-[5px] text-red-500 text-sm min-h-[20px] block">{errors?.shaba_code?.message}</span>}
      </div>
      <div className="flex flex-col h-[60px]">
      <input {...register("debitCard_code")} placeholder="شماره کارت" 
        className="border border-gray-300 rounded-md px-[5px] py-[4px] xs:w-[95%] my-2 mx-2 md:w-[18vw]"/>
        {!!errors?.debitCard_code && (
          <span className="whitespace-nowrap mr-[15px] -mt-[5px] text-red-500 text-sm min-h-[20px] block">{errors?.debitCard_code?.message}</span>
        )}
      </div>
      <div className="flex flex-col h-[60px]">
        <input {...register("accountIdentifier")} placeholder="شماره حساب" 
        className="border border-gray-300 rounded-md px-[5px] py-[4px] xs:w-[95%] my-2 mx-2 md:w-[18vw]"/>
        {!!errors?.accountIdentifier && (
          <span className="whitespace-nowrap mr-[15px] -mt-[5px] text-red-500 text-sm min-h-[20px] block">{errors?.accountIdentifier?.message}</span>
        )}
      </div>
      </div>

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

export default BankAccountForm;