import React from 'react'
import { aBeeZee, higuen, moKoTo } from '../styles/fonts'
import Video from 'next-video'
import myVideo  from '../videos/video.mp4'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className='bg-auBlue h-fit p-10 max-pn:p-5'>
        <nav  className={`text-white ${moKoTo.className} text-4xl max-sm-pn:text-2xl`}>
          REAL CLOUD DEVOPS EXPERTS
        </nav>
        <div className={`mt-20 flex justify-between items-center max-tb:flex-col max-tb:mt-10`}>
            <h1 className={`text-7xl text-left text-white ${higuen.className} max-lt:text-5xl max-tb:text-3xl animate-moveIn`}> 4 Months Practical Intensive Training on Cloud Operations & DevOps Practices</h1>
            <div className={`mt-3 w-[680px] h-[510px] rounded-lg max-lt:w-[512px] max-lt:h-[384px] max-tb:w-[381.6px] max-tb:h-[286px] max-sm-pn:w-[300px] max-sm-pn:h-[225px] animate-moveOut`}>
                <Video src={myVideo} autoPlay loop controls={false} debug={false}   muted className='w-[680px] h-[510px] max-lt:w-[512px] max-lt:h-[384px] max-tb:w-[381.6px] max-tb:h-[286px] max-sm-pn:w-[300px] max-sm-pn:h-[225px]' />
            </div>
        </div>
        <button className={`btn btn-wide rounded-none mt-3 bg-white border-none ${aBeeZee.className} text-btnText animate-moveIn`}>LEARN MORE</button>
    </div>
  )
}

export default Hero