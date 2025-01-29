"use client";

import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import AuthProvider from "@/components/partials/provider/AuthProvider";
import useQuery from "@/core/hooks/query";
import Link from "next/link";
import { useEffect } from "react";

function PaymentPage() {
  const { getQuery } = useQuery();

  const status = getQuery("status");

  if (status === "success")
    return (
        <AuthProvider>
          <Header/>
      <div className="m-auto w-[300px] h-[200px] mt-[50px] text-center">
        <h3 className="text-xl text-green-600 mb-[30px]">پرداخت شما با موفقیت انجام شد</h3>
        <Link className="text-white w-[80px] h-[35px] bg-green-600 rounded-lg px-[8px] py-[5px]" href="/profile/my-tours">برو به پروفایل</Link>
      </div>
        <Footer/>
      </AuthProvider>
    );

  return (
    <div>
      <p>پرداخت انجام نشد</p>
    </div>
  );
}

export default PaymentPage;
