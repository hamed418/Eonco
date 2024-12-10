

const SliderCard = ({ title, description, icon, color }) => {
    return (
        <div className="mt-10 ml-[1%] max-sm:mx-[6%]">
            <div className={`bg-[${color}] p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]`} style={{ backgroundColor: color }}>
                <div className="text-center">
                    {icon}
                </div>

                <h1 className="mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]">
                    {title}
                </h1>

                <p className="font-medium capitalize text-[#4b4646] text-[20px] mt-10 max-sm:mt-4 max-sm:text-[18px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SliderCard;