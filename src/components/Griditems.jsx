import Image from 'next/image';
import drive from './Asset/drive.webp';

const Griditems = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-5 items-center place-items-center mt-40 mb-10 max-sm:grid-cols-1 mx-[3%]">
                <div className="group border border-[#e0f63c]  bg-[#0c0c0c]  cursor-pointer  p-4 rounded-xl  h-[12rem] sm:h-[18rem] md:h-[19rem] lg:h-[14rem] xl:h-[12rem] hover:bg-[#e0f63c] hover:text-black duration-300">
                    <h1 className="text-[#f9f9f9] group-hover:text-black text-[25px] font-bold text-center">
                        Talking-Head Videos
                    </h1>
                    <article className="text-[20px]  font-medium mt-4 text-white group-hover:text-black text-center">
                        Grow a personal brand in any niche with our trendy edits.{" "}
                    </article>
                </div>
                <div className="group border border-[#e0f63c]  bg-[#0c0c0c]  cursor-pointer  p-4 rounded-xl  h-[12rem] sm:h-[18rem] md:h-[19rem] lg:h-[14rem] xl:h-[12rem] hover:bg-[#e0f63c] hover:text-black duration-300">
                    <h1 className="text-[#f9f9f9] group-hover:text-black text-[25px] font-bold text-center">
                        Automated Videos
                    </h1>
                    <article className="text-[20px]  font-medium mt-4 text-white group-hover:text-black text-center">
                        Get edits like MagnatesMedia with zero efforts.
                    </article>
                </div>
                <div className="group border border-[#e0f63c]  bg-[#0c0c0c]  cursor-pointer  p-4 rounded-xl  h-[12rem] sm:h-[18rem] md:h-[19rem] lg:h-[14rem] xl:h-[12rem] hover:bg-[#e0f63c] hover:text-black duration-300">
                    <h1 className="text-[#f9f9f9] group-hover:text-black text-[25px] font-bold text-center">
                        Podcast Editing
                    </h1>
                    <article className="text-[20px]  font-medium mt-4 text-white group-hover:text-black text-center">
                        Make those lengthy podcasts interesting by cutting out the fluff.
                    </article>
                </div>
                <div className="group border border-[#e0f63c]  bg-[#0c0c0c]  cursor-pointer  p-4 rounded-xl  h-[12rem] sm:h-[18rem] md:h-[19rem] lg:h-[14rem] xl:h-[12rem] hover:bg-[#e0f63c] hover:text-black duration-300">
                    <h1 className="text-[#f9f9f9] group-hover:text-black text-[25px] font-bold text-center">
                        Podcast to Shorts{" "}
                    </h1>
                    <article className="text-[20px]  font-medium mt-4 text-white group-hover:text-black text-center">
                        Clip short form videos from your lengthy podcasts.
                    </article>
                </div>
                <div className="group border border-[#e0f63c]  bg-[#0c0c0c]  cursor-pointer  p-4 rounded-xl  h-[12rem] sm:h-[18rem] md:h-[19rem] lg:h-[14rem] xl:h-[12rem] hover:bg-[#e0f63c] hover:text-black duration-300">
                    <h1 className="text-[#f9f9f9] group-hover:text-black text-[25px] font-bold text-center">
                        UGC ADS
                    </h1>
                    <article className="text-[20px]  font-medium mt-4 text-white group-hover:text-black text-center">
                        High converting ads for any site, facebook, Instagram, TikTok.
                    </article>
                </div>
                <div className="group border border-[#e0f63c]  bg-[#0c0c0c]  cursor-pointer  p-4 rounded-xl  h-[12rem] sm:h-[18rem] md:h-[19rem] lg:h-[14rem] xl:h-[12rem] hover:bg-[#e0f63c] hover:text-black duration-300">
                    <h1 className="text-[#f9f9f9] group-hover:text-black text-[25px] font-bold text-center">
                        YouTube Shorts{" "}
                    </h1>
                    <article className="text-[20px]  font-medium mt-4 text-white group-hover:text-black text-center">
                        Get viral with our highly engaging short-form videos.{" "}
                    </article>
                </div>
                <div className="group border border-[#e0f63c]  bg-[#0c0c0c]  cursor-pointer  p-4 rounded-xl  h-[12rem] sm:h-[18rem] md:h-[19rem] lg:h-[14rem] xl:h-[12rem] hover:bg-[#e0f63c] hover:text-black duration-300">
                    <h1 className="text-[#f9f9f9] group-hover:text-black text-[25px] font-bold text-center">
                        Vlogs
                    </h1>
                    <article className="text-[20px]  font-medium mt-4 text-white group-hover:text-black text-center">
                        Dynamic edits to turn your vlogs into a real cinematic experience.{" "}
                    </article>
                </div>
                <div className="group border border-[#e0f63c]  bg-[#0c0c0c]  cursor-pointer  p-4 rounded-xl  h-[12rem] sm:h-[18rem] md:h-[19rem] lg:h-[14rem] xl:h-[12rem] hover:bg-[#e0f63c] hover:text-black duration-300">
                    <h1 className="text-[#f9f9f9] group-hover:text-black text-[25px] font-bold text-center">
                        Webinars
                    </h1>
                    <article className="text-[20px]  font-medium mt-4 text-white group-hover:text-black text-center">
                        Turn those seminars, webinars into interesting pieces of content.
                    </article>
                </div>
            </div>

            {/*Raw Footage */}
            <div className="grid grid-cols-3 place-items-center justify-center items-center gap-10 mx-[3%]  mt-40 max-sm:grid-cols-1">

                <div className="block items-center border hover:border-[#fff] duration-300 border-[#e0f63c] p-4 rounded-xl h-full ">
                    <div className="bg-[#fafafa] p-5 rounded-full w-fit m-auto">
                    <img src="https://i.ibb.co.com/QmkLTQ2/drive-eonco.webp" alt="drive-eonco" border="0"/>
                    </div>
                    <h3 className="text-[#fdfdfd] mt-12  text-[28px] max-sm:text-[20px] mainfont font-bold leading-[32px] text-center">Raw footage</h3>
                    <article className="text-[22px] mt-12 max-sm:text-[18px] leading-[32px] text-[#fdfdfc] mainfont text-center">Share your pre-recorded or raw videos in your own unlimited storage Google drive folder.</article>
                </div>

                <div className="block  items-center border  hover:border-[#fff] duration-300 border-[#e0f63c]  p-4 rounded-xl h-full">
                    <div className="bg-[#fafafa] p-5 rounded-full w-fit m-auto">
                    <img src="https://i.ibb.co.com/7vZdDDq/whatsapp.webp" alt="whatsapp" border="0"/>
                    </div>
                    <h3 className="text-[#fdfdfd] mt-12  text-[28px] max-sm:text-[20px] mainfont font-bold leading-[32px] text-center max-h-max">Available 24/7</h3>
                    <article className="text-[22px] mt-12 max-sm:text-[18px] leading-[32px] text-[#fdfdfc] mainfont text-center">Contact us regarding anything on WhatsApp whenever you want.</article>
                </div>

                <div className="block  items-center border  hover:border-[#fff] duration-300 border-[#e0f63c]  p-4 rounded-xl h-full">
                    <div className="bg-[#fafafa] p-5 rounded-full w-fit m-auto">
                    <img src="https://i.ibb.co.com/Tt3MM6p/gogle-sheets.webp" alt="gogle-sheets" border="0"/>

                    </div>

                    <h3 className="text-[#fdfdfd] mt-12  text-[28px] max-sm:text-[20px] mainfont font-bold leading-[32px] text-center">Real-time Updates</h3>
                    <article className="text-[22px] mt-12 max-sm:text-[18px] leading-[32px] text-[#fdfdfc] mainfont text-center">Check out our personalized CRM system anytime you wanna know about the process.</article>
                </div>
            </div>

        </div>
    );
};

export default Griditems;
