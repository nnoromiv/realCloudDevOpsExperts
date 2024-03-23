import React from 'react'
import { aBeeZee, higuen, moKoTo } from '../styles/fonts'
import Video from 'next-video'
import myVideo  from '../videos/video.mp4'

const Hero = () => {
  return (
    <div className='bg-auBlue h-[100vh] p-10'>
        <nav className={`text-white ${moKoTo.className} text-4xl`}>REAL CLOUD DEVOPS EXPERTS</nav>
        <div className={`mt-20  flex justify-between items-center`}>
            <h1 className={`text-7xl text-left text-white ${higuen.className}`}> 4 Months Practical Intensive Training on Cloud Operations & DevOps Practices</h1>
            <div className={`w-[680px] h-[510px] rounded-lg`}>
                <Video src={myVideo} autoPlay loop controls={false} width={680} height={510} muted />
            </div>
        </div>
        <button className={`btn btn-wide rounded-none bg-white border-none ${aBeeZee.className} text-btnText`}>LEARN MORE</button>
    </div>
  )
}

export default Hero