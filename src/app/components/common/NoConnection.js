"use client";

const NoConnection = ({ reset }) => {
    return (
      <>
      <Header/>
      <div className="w-[70%] mx-auto flex flex-row">
          <div className="m-auto flex flex-col">
              <h2 className="font-semibold text-[36px] leading-[56px]">اتصال با سرور برقرار نیست!</h2>
              <p className="text-gray-600 mt-4">
        لطفا بعدا دوباره امتحان کنید.</p>
        <button onClick={() => reset()}>تلاش مجدد</button>
          </div>
          <div>
              <Image className="w-[555px] h-[555px]" src="/ico/ErrorRobot.png" width={200} height={200} alt="404"></Image>
          </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default NoConnection;



