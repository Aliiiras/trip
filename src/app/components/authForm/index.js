"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import ModalContainer from "../common/modal/ModalContainer";
// import { getImagePath } from "@/app/core/utils/helper";
import { useGetUserData } from "@/app/core/services/queries";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
import ImageWrapper from "../features/Image/ImageWrapper";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data } = useGetUserData();


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu") && !event.target.closest("a")) {
        setIsMenuOpen(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    signOut(); 
  };

  if (data?.data){ return (
  <div className="relative mx-[30px]">
    <Link className="text-green-600 flex numbers" href="#" onClick={handleMenu}>
    <ImageWrapper className="ml-2" src="profile-g.svg" alt="My Icon" width="24" height="24" />
    {data?.data?.mobile}
    <ImageWrapper src="arrow-down.svg" alt="My Icon" width="24" height="24" />
    </Link>
    {isMenuOpen && data?.data?.id && (
      <div 
      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 w-60">
        <div 
        className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-100 rounded h-10">
        <div 
        className="w-7 h-7 bg-gray-300 items-center justify-center flex rounded-full mr-3">
          <ImageWrapper src="profiletranp.svg" className=""/>
        </div>
        <p className="numbers flex items-center space-x-2 rtl:space-x-reverse pr-4">{data?.data?.mobile}</p>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse h-10">
        <Link href="/profile" className="flex items-center space-x-2 rtl:space-x-reverse pr-4">
        <ImageWrapper src="profilenull.svg" className="ml-2"/>
        اطلاعات حساب کاربری</Link>
        </div>
        <hr></hr>
        <div className="flex items-center space-x-2 rtl:space-x-reverse h-10">
        <ImageWrapper src="logout.svg" className="mr-4"/>
        <button onClick={handleLogout} className="flex items-center space-x-2 rtl:space-x-reverse text-red-600">
          خروج از حساب کاربری</button>
        </div>
      </div>
    )}
  </div>
  );  }

  return (
    <div>
      <button className="sxs:hidden md:visible lg:visible" onClick={() => setIsOpen(true)}>ورود|ثبت نام</button>
      <button className="sxs:ml-8 p-[4px] border border-red-500 rounded-lg md:hidden lg:hidden" onClick={() => setIsOpen(true)}><ImageWrapper src="logout.svg"/></button>
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;