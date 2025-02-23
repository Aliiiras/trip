"use client";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AuthProvider from "../core/providers/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImageWrapper from "../components/features/Image/ImageWrapper";

export default function ProfileLayout({ children }) {
  const router = usePathname(); // to check which route is active
  return (
    <AuthProvider>
      <Header />
      <div className="grid grid-cols-3 gap-6 xs:flex flex-col md:flex md:flex-row md:mt-[20px] md:mr-[40px]">
        {/* border border-slate-200 divide-y rounded-md col-span-1 */}
        <div className="md:h-[148px] md:border md:rounded-lg">
          <ul
            className=" flex flex-row items-center xs:w-full sxs:hidden 
        md:block md:w-[20vw]"
          >
            <Link
              href="/profile"
              className={`flex flex-row gap-[8px] rounded w-[100%] px-[2px] py-[4px]  transition-all ${
                router === "/profile"
                  ? "text-green-700 xs:border-b-2 xs:border-green-600 !bg-gray-100 md:!bg-green-200 md:border-none"
                  : "bg-gray-0"
              }`}
            >
              <ImageWrapper className="md:mr-[8px]" src="profile-g.svg" />
              <li className="p-2 flex flex-row gap-2 mr-2">پروفایل من</li>
            </Link>

            <hr />

            <Link
              href="/profile/my-tours"
              className={`flex flex-row gap-[8px] w-[100%] px-[2px] py-[4px] transition-all ${
                router === "/profile/my-tours"
                  ? "text-green-700 xs:border-b-2 xs:border-green-600 !bg-gray-100 md:!bg-green-200 md:border-none"
                  : "bg-gray-0"
              }`}
            >
              <ImageWrapper className="md:mr-[8px]" src="tours.svg" />
              <li className="p-2 flex flex-row gap-2 mr-2">تور های من</li>
            </Link>

            <hr />

            <Link
              href="/profile/transactions"
              className={`flex flex-row gap-[8px] rounded w-[100%] px-[2px] py-[4px] transition-all ${
                router === "/profile/transactions"
                  ? "text-green-700 xs:border-b-2 xs:border-green-600 !bg-gray-100 md:!bg-green-200 md:border-none"
                  : "bg-gray-0"
              }`}
            >
              <ImageWrapper className="md:mr-[8px]" src="transac.svg" />
              <li className="p-2 flex flex-row gap-2 mr-2">تراکنش ها</li>
            </Link>
          </ul>
        </div>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </AuthProvider>
  );
}
