const Hero = () => {
  return (
    <div className='bg-auBlue h-fit p-10 max-pn:p-5'>
        <nav  className={`text-white font-moKoto text-4xl max-sm-pn:text-2xl`}>
          REAL CLOUD DEVOPS EXPERTS
        </nav>
        <div className={`mt-20 flex justify-between items-center max-tb:flex-col max-tb:mt-10`}>
            <h1 className={`text-7xl text-left text-white font-higuen max-lt:text-5xl max-tb:text-3xl animate-moveIn`}> 4 Months Practical Intensive Training on Cloud Operations & DevOps Practices</h1>
            <video src='../videos/video.mp4' width={500} height={500} autoPlay loop controls={false} muted  className='w-[680px] h-[510px] max-lt:w-[512px] max-lt:h-[384px] max-tb:w-[381.6px] max-tb:h-[286px] max-sm-pn:w-[300px] max-sm-pn:h-[225px]' />
        </div>
        <a href={"https://www.facebook.com/realclouddevops"} target='_blank'>
          <button  className={`btn btn-wide rounded-none mt-3 hover:bg-white bg-white border-none font-aBeeZee text-btnText animate-moveIn`}>LEARN MORE</button>
        </a>
    </div>
  )
}

export default Hero