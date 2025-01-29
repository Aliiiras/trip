import ImageWrapper from "../features/Image/ImageWrapper";
import AuthForm from "../authForm";

function Header() {
  return (
    <div className="border-b-2 border-gray-200">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold drop-shadow-lg sxs:hidden">Travel</h2>
        <ul className="sxs:hidden">
          <li>صفحه اصلی</li>
          <li>خدمات گردشگری</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
        <div className="w-[50px] h-[20px] px-4 my-2">
          <span className="w-[30px] h-[3px] bg-yellow-500 block mb-1 rounded"></span>
          <span className="w-[30px] h-[3px] bg-yellow-500 block mb-1 rounded"></span>
          <span className="w-[30px] h-[3px] bg-yellow-500 block mb-1 rounded"></span>
        </div>
        <AuthForm/>
      </div>
      </div>
  )
}

export default Header