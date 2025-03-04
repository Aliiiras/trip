"use client";

import { useState } from "react";
import OtpInput from "react18-input-otp";

import { useCheckOtp } from "@/app/core/services/mutations";

function CheckOTPForm({ mobile, setStep, setIsOpen }) {
  const [code, setCode] = useState("");

  const { isPending, mutate } = useCheckOtp();

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: async (data) => {
          setIsOpen(false);
          setStep(1);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  const changeHandler = (otp) => {
    setCode(otp);
  };

  return (
    <div className="flex flex-col w-[358px] h-[362px] bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-6">
      <h4 className="text-xl font-bold text-center">کد تایید را وارد کنید.</h4>
      <form
        className="flex flex-col justify-end gap-10 flex-1"
        onSubmit={checkOtpHandler}
      >
        <label>شماره موبایل  {mobile} <button
        className="text-green-600 self-start"
        onClick={() => setStep(1)}
      >  ویرایش </button></label>
        <div style={{ direction: "ltr" }}>
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            inputStyle={{
              border: "1px solid silver",
              borderRadius: "5px",
              width: "49px",
              height: "45px",
              marginRight: "5px",
            }}
          />
        </div>
        <button
          className="bg-[#28A745] h-11 text-white rounded-md"
          type="submit"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;