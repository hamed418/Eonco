import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Slider2 from "@/components/Slider2"
import Video from "@/components/Video"
//import { clsx } from 'clsx';
import FAQ from "@/components/FAQ"
import MediaComp from "@/components/MediaComp"
import Griditems from './../components/Griditems'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Video />
      <Slider2 />
      <Griditems />
      <MediaComp />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
