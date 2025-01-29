import ImageWrapper from "../features/Image/ImageWrapper"

function Footer() {
  return (
    <>
    <hr className="border-t-2 border-dotted my-4"></hr>
    <div>
        <div className="flex justify-around">
            <div className="flex flex-col">
                <h3 className="font-bold text-lg leading-[34px] mb-[12px]">تورینو</h3>
                <a className="text-md leading-[30px] font-normal" href="#">درباره ما</a>
                <a className="text-md leading-[30px] font-normal" href="#">تماس با ما</a>
                <a className="text-md leading-[30px] font-normal" href="#">چرا تورینو</a>
                <a className="text-md leading-[30px] font-normal" href="#">بیمه مسافرتی</a>
            </div>
            <div className="flex flex-col">
                <h3 className="font-bold text-lg leading-[34px] mb-[12px]">خدمات مشتریان</h3>
                <a className="text-md leading-[30px] font-normal" href="#">پشتیبانی آنلاین</a>
                <a className="text-md leading-[30px] font-normal" href="#">راهنمای خرید</a>
                <a className="text-md leading-[30px] font-normal" href="#">راهنمای استرداد</a>
                <a className="text-md leading-[30px] font-normal" href="#">پرسش و پاسخ</a>
            </div>
        </div>
        <div className="flex flex-row-reverse justify-around mb-[8]">
            <div className="flex flex-col">
                <ImageWrapper src="logo.png" width={100} height={44} alt="logo" />
                <h4><span className="numbers">021-8574 </span>
                     : تلفن پشتیبانی </h4>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-[20px]">
                <ImageWrapper src="ecunion-35c3c933.png" width={50} height={50} alt="ecunion" />
                <ImageWrapper src="passenger-rights-48368f81 1.png" width={50} height={50} alt="passngr" />
                <ImageWrapper src="samandehi-6e2b448a.png" width={50} height={50} alt="samandhi" />
                <div className="col-span-3 flex justify-center gap-4">
                <ImageWrapper src="state-airline-f45c55b2 1.png" width={50} height={50} alt="statairline" />
                <ImageWrapper src="aira-682b7c43.png" width={50} height={50} alt="aira" />
                </div>
            </div>
        </div>
    </div>
    <hr></hr>
    <h4 className="flex justify-center text-[12px]">کلیه حقوق این وب سایت متعلق به تورینو میباشد.</h4>
    </>
  )
}

export default Footer