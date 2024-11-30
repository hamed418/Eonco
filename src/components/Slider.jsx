import React from "react";

const Slider = () => {
  return (
    <>
      <h1 className="text-[90px] max-sm:text-[35px] mainfont bold mt-40 text-center font-bold uppercase text-[#DBFA9B] flex items-center justify-center">
        our Masterpieces
      </h1>

      {/*Upper porsion of the card*/}
      <div className="flex justify-between max-sm:justify-center items-end mx-[3%] mt-20 max-sm:flex-wrap max-sm:gap-10">
        <h1 className="text-[32px] font-[700] leading-8 text-white max-sm:text-center">
          Process <br/> To Get You VIRAL :
        </h1>
        <div className="flex gap-10 max-sm:justify-center items-center">
          <button
            className="bg-[#4c4d4a43] capitalize text-[#ffffff] text-[22px] font-[500] hover:text-[#0d0d0dd9] hover:bg-[#e0f63c] duration-300 rounded-full px-7 py-6 cursor-not-allowed opacity-40"
            disabled=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className="bg-[#4c4d4a43] capitalize text-[#ffffff] text-[22px] font-[500] hover:text-[#0d0d0dd9] hover:bg-[#e0f63c] duration-300 rounded-full px-7 py-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>



      <div className="flex items-center w-full overflow-hidden max-sm:m-auto">
        <div className="mt-10 ml-[3%] max-sm:mx-[6%]">
          <div className="bg-[#DBFA9B] p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]">
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
              className="lucide lucide-lightbulb w-12 h-12 text-[#232524]"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
            <h1 className="mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]">
              Get the best video ideas in your niche
            </h1>
            <p className="font-medium capitalize text-[#4b4646] text-[20px] mt-10 max-sm:mt-4 max-sm:text-[18px]">
              We help you sort out the best content that perfectly aligns with
              your niche. How? You answer us some simple questions and from
              there we give you a detailed plan with content strategies,
              competitor analysis and proper keyword research.
            </p>
          </div>

        </div>


        <div className="mt-10 ml-[1%] translate-x-[0] duration-300">
          <div className="bg-[#CEDCFF] p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]">
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
              className="lucide lucide-video w-12 h-12 text-[#4b4646]"
            >
              <path d="m22 8-6 4 6 4V8Z"></path>
              <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
            </svg>
            <h1 className="mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]">
              Press the record button
            </h1>
            <p className="font-medium capitalize text-[#4b4646] text-[20px] mt-10 max-sm:text-[18px] max-sm:font-semibold">
              Record and send! Hassle-free videos will be ready for you in less
              than 48 hrs. We are always standby to help you with ideas, gears
              and everything needed to make you look like a pro. Get a free
              drive link with unlimited storage just for you.
            </p>
          </div>
        </div>


        <div className="mt-10 ml-[1%] translate-x-[0] duration-300">
          <div className="bg-[#f4f4f2] p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]">
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
              className="lucide lucide-mouse-pointer-click w-12 h-12 text-[#232524]"
            >
              <path d="m9 9 5 12 1.8-5.2L21 14Z"></path>
              <path d="M7.2 2.2 8 5.1"></path>
              <path d="m5.1 8-2.9-.8"></path>
              <path d="M14 4.1 12 6"></path>
              <path d="m6 12-1.9 2"></path>
            </svg>
            <h1 className="mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]">
              Retention-based video editing
            </h1>
            <p className="font-medium capitalize text-[#4b4646] text-[20px] mt-10 max-sm:text-[18px] max-sm:font-semibold">
              Keep those eyes locked on your video with our clean and fast
              retention-based edits. Get your own unique style with the
              trendiest edits from our animators, not only in the intro but make
              the entire video locked in your audience's eyes and get the views
              at lightning speed.
            </p>
          </div>
        </div>


        <div className="mt-10 ml-[1%] translate-x-[0rem] duration-300">
          <div className="bg-[#DBFA9B] p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]">
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
              className="lucide lucide-check-circle w-12 h-12 text-[#232524]"
            >
              <path d="m9 12 2 2 4-4"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <h1 className="mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]">
              Boost your confidence
            </h1>
            <p className="font-medium capitalize text-[#4b4646] text-[20px] mt-10 max-sm:text-[18px] max-sm:font-semibold">
              You don't just look good, you will feel it too. Boost your
              confidence by showing up as the perfect version of you with
              little to no effort. Your personality will shine through and your
              message will be loud and clear.
            </p>
          </div>
        </div>


      </div>



    </>
  )
}

export default Slider;
