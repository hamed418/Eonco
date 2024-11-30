import React from "react";

const Hero = () => {
  return (
    <div className="py-10 rounded-3xl mx-[3%] h-[37rem] max-sm:py-8 font-">
      <div className="mx-40 max-sm:mx-6">
        <h1 className="uppercase text-center text-xl mb-5 text-[#DBFA9B] max-sm:text-sm">
          With your dedicated content <br className="hidden max-sm:block" />{" "}
          viral touch
        </h1>
        <h1 className="text-[100px] text-center font-bold text-white capitalize leading-[100px] max-sm:leading-[50px] max-sm:text-[50px]">
          Grow super fast <br />
        </h1>
        <div className="flex justify-center mt-2">
          <h1 className="text-[100px] text-center font-bold text-white capitalize leading-[100px] max-sm:leading-[50px] max-sm:text-[50px]">
            on
          </h1>
          <div className="h-[6rem] max-sm:h-[3rem] overflow-hidden words">
            <p className="text-[100px] ml-8 max-sm:ml-2 text-left font-bold zip capitalize leading-[100px] max-sm:leading-[50px] max-sm:text-[40px]">
              youtube
            </p>
            <p className="text-[100px] ml-6 max-sm:ml-2 text-left font-bold zip capitalize leading-[100px] max-sm:leading-[50px] max-sm:text-[40px]">
              Instagram
            </p>
            <p className="text-[100px] ml-6 max-sm:ml-2 text-left font-bold zip capitalize leading-[100px] max-sm:leading-[50px] max-sm:text-[40px]">
              tiktok
            </p>
            <p className="text-[100px] ml-6 max-sm:ml-2 text-left font-bold zip capitalize leading-[100px] max-sm:leading-[50px] max-sm:text-[40px]">
              Instagram
            </p>
            <p className="text-[100px] ml-8 max-sm:ml-2 text-left font-bold zip capitalize leading-[100px] max-sm:leading-[50px] max-sm:text-[40px]">
              youtube
            </p>
            <p className="text-[100px] ml-6 max-sm:ml-2 text-left font-bold zip capitalize leading-[100px] max-sm:leading-[50px] max-sm:text-[40px]">
              tiktok
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="307"
          height="34"
          viewBox="0 0 307 34"
          fill="none"
          className="m-auto block max-sm:mr-[20%] max-md:mr-[30%] max-lg:mr-[40%] max-sm:w-40"
        >
          <path
            d="M303.498 26.5334C183.108 -17.8935 53.0014 10.644 2.99697 30.4662"
            stroke="#DBFA9B"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
        <p className="text-[21px] font-normal text-center mt-10 mx-10 max-sm:mx-4 max-sm:text-[15px] max-sm:mt-1">
          Generate views and sales with our expert team, who have worked with
          the biggest creators. Relax, we handle it all for you.
        </p>
        <div className="flex justify-center gap-5 mt-10 max-sm:flex-wrap">
          <a
            className="bg-[#FFFFFF] cursor-pointer capitalize text-[#0d0d0dd9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:bg-[#4c4d4a43] hover:text-[#fffffffd] duration-300 max-sm:px-4 max-sm:py-2 max-sm:w-full text-center"
            href="#"
          >
            view pricing
          </a>
          <a
            className="bg-[#4c4d4a43] cursor-pointer capitalize text-[#FFF0E9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:text-[#0d0d0dd9] hover:bg-[#FFF0E9] duration-300 max-sm:px-4 max-sm:py-2 max-sm:w-full max-sm:justify-center flex gap-2 items-center"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
