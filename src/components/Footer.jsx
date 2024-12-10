import Image from "next/image";
import mzLogo from './Asset/mzMedia.png';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <section className="container mt-16">
      <hr />
      <div className="flex max-sm:flex-col justify-center items-center space-y-4 py-5">
        <div className="space-y-4">
          <Image className="w-[200px] h-[60px] mx-auto" src={mzLogo} alt="MZLOGO" placeholder='blur' />
          <p className="flex text-center gap-2 text-[#9c9c9c] lg:text-xl">© 2024 mzmedia | all rights reseved by Bolod YEAMIN</p>
        </div>
        <div className="w-12 h-12 bg-[#e7b8fa] hover:bg-[#d9aaf7] rounded-full flex justify-center items-center cursor-pointer absolute max-sm:relative max-sm:mx-auto  sm:right-6 lg:right-9 " onClick={handleScrollToTop}>
          <i class="ri-arrow-up-double-line text-slate-700 text-4xl "></i>
        </div>
      </div>
    </section>

  );
};

export default Footer;
