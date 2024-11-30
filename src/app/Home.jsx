import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Slider from "@/components/Slider"
import Video from "@/components/Video"
import React from "react"
//import { clsx } from 'clsx';
import Griditems from './../components/Griditems';

const Home = () => {
  return(
    <div>
      <Header/>
      <Hero/>
      <Video/>
      <Footer/>
      <Slider/>
      <Griditems/>
    </div>
  )
}

export default Home
