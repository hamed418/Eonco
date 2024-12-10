import Image from 'next/image'
import mzLogo from './Asset/mzMedia.png'

const MediaCompCard = ({ type, price, features }) => {
    return (
        <div className="container h-fit border-[1px] border-solid border-white rounded-xl py-4 mt-6 lg:mt-12 hover:cursor-pointer ">
            <div className='flex justify-between'>
                <div className="w-[150px] h-[60px] mt-2">
                    <Image src={mzLogo} alt="MZLOGO" placeholder='blur' />
                </div>
                <div >
                    <button className='uppercase font-bold font-sans bg-[#2a2a28] px-6 py-2 rounded-3xl shadow-sm mt-2'>{type}</button>
                </div>
            </div>

            <div>
                <p className='text-slate-200 opacity-60 mt-2 '>Explore and compare our packages</p>
                <h1 className='text-[50px] font-extrabold text-[#ffffff]'>{price}</h1>
            </div>

            <div>
                {features.map((feature, index) => (
                    <div key={index} className='flex space-x-5 mb-2'>
                        <i className="ri-add-circle-line text-2xl "></i>
                        <p className="font-semibold text-xl pt-[2px]">{feature}</p>
                    </div>
                ))}
            </div>

            <div className='w-full text-center m-auto block bg-white text-black hover:bg-[#e0f63c] py-3 text-xl hover:shadow-sm hover:pointer rounded-xl mt-10 font-extrabold'>
                <button>BUY NOW</button>
            </div>

        </div>
    )
}

export default MediaCompCard