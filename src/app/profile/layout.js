"use client"
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AuthProvider from "../core/providers/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function ProfileLayout({ children }) {
  const router = usePathname(); // to check which route is active
  return (
    
    <AuthProvider>
      <Header/>
      <div className="grid grid-cols-3 gap-6 bg-gray-100 xs:flex flex-col">
        <ul className="xs:hidden sxs:hidden border border-slate-200 divide-y rounded-md col-span-1">
          <li className="p-2 flex flex-row gap-2 mr-2">
            <img src="/ico/profile-g.svg"></img>
            پروفایل من
          </li>
          <li className="p-2 flex flex-row gap-2 mr-2">
          <img src="/ico/tours.svg"></img>
            <Link href="/profile/my-tours" className={`rounded w-[100%] px-[4px] py-[4px]  transition-all ${
      router === "/profile/my-tours"
        ? "bg-green-300"
        : "bg-gray-100"
    }`}>تور ها من</Link>
          </li>
          <li className="p-2 flex flex-row gap-2 mr-2">
          <img src="/ico/transac.svg"></img>
            <Link href="/profile/transactions" className={`rounded w-[100%] px-[4px] py-[4px] transition-all ${
      router === "/profile/transactions"
        ? "bg-green-300"
        : "bg-gray-100"
    }`}>تراکنش ها</Link>
          </li>
        </ul>
        <main
        //  className="bg-white col-span-3 border-gray-200 rounded-lg border min-h-80"
         >{children}</main>
      </div>
      <Footer/>
    </AuthProvider>
  );
}