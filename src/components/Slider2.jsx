import { CameraIcon, LightBulbIcon, PencilIcon, SignIcon } from './IconComp';
import SliderCard from './SliderCard';


const Slider2 = () => {

    return (
        <>
            <h1 className="text-[90px] max-sm:text-[35px] mainfont bold mt-40 text-center font-bold uppercase text-[#DBFA9B] flex items-center justify-center">
                our Masterpieces
            </h1>

            {/*Upper porsion of the card*/}
            <div className="flex justify-between max-sm:justify-center items-end mx-[3%] mt-20 max-sm:flex-wrap max-sm:gap-10">
                <h1 className="text-[32px] font-[700] leading-8 text-white max-sm:text-center">
                    Process <br /> To Get You VIRAL :
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


            {/* Slider Card Component */}
            <div className="flex items-center w-full overflow-hidden  max-sm:m-auto">
                <SliderCard
                    title="Get the best video ideas in your niche"
                    description="We Help You Sort Out The Best Content That Perfectly Aligns With Your Niche. How? You Answer Us Some Simple Questions And From There We Give You A Detailed Plan With Content Strategies, Competitor Analysis And Proper Keyword Research."
                    icon={<LightBulbIcon />}
                    color="#DBFA9B"
                />

                <SliderCard
                    title="Press the record button"
                    description="Record and send! Hassle-free videos will be ready for you in less than 48 hrs. We are always standby to help you with ideas, gears and everything needed to make you look like a pro. Get a free drive link with unlimited storage just for you."
                    icon={<CameraIcon />}
                    color="#CEDCFF"
                />

                <SliderCard
                    title="Retention-based video editing"
                    description="Keep those eyes locked on your video with our clean and fast
                retention-based edits. Get your own unique style with the
                trendiest edits from our animators, not only in the intro but make
                the entire video locked in your audience's eyes and get the views
                at lightning speed."
                    icon={<PencilIcon />}
                    color="#f4f4f2"
                />

                <SliderCard
                    title="Boost your confidence"
                    description=" You don't just look good, you will feel it too. Boost your
                confidence by showing up as the perfect version of you with
                little to no effort. Your personality will shine through and your
                message will be loud and clear."
                    icon={<SignIcon />}
                    color="#DBFA9B"
                />

            </div>
        </>
    );
};

export default Slider2;


