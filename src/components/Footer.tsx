import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='h-[100vh] flex max-tb:flex-col'>
      <div className='w-1/2 h-full bg-white p-10 flex flex-col justify-between max-tb:w-full max-pn:p-5 max-sm-pn:p-2'>
        <h1 className={`font-higuen text-auBlue text-7xl max-lt:text-5xl max-sm-pn:text-4xl`}>What to Expect?</h1>
        <h1 className={`font-higuen text-black text-6xl max-lt:text-4xl mt-3 max-sm-pn:text-3xl`}>Interview Preparation</h1>
        <h1 className={`font-higuen text-black text-6xl max-lt:text-4xl mt-3 max-sm-pn:text-3xl`}>Resume Building</h1>
        <h1 className={`font-higuen text-black text-6xl max-lt:text-4xl mt-3 max-sm-pn:text-3xl`}>Linkedin Optimization</h1>
        <h1 className={`font-higuen text-black text-6xl max-lt:text-4xl mt-3 max-sm-pn:text-3xl`}>Production Live Projects</h1>
      </div>
      <div className='w-1/2 h-full bg-auBlue p-10 flex flex-col justify-between max-tb:w-full max-pn:p-5 max-sm-pn:p-2'>
        <div className='flex flex-col'>
          <a href={"https://wa.link/jbxg5v"} target='_blank' className='flex items-center'>
            <FontAwesomeIcon icon={faWhatsapp} size='2xl' className='text-white w-10 m-4' />
            <h2 className='font-bold text-white max-sm-pn:text-sm'>+1-567-803-7089</h2>
          </a>
          <a href={"https://wa.link/1v3as8"} target='_blank' className='flex items-center'>
            <FontAwesomeIcon icon={faWhatsapp} size='2xl' className='text-white w-10 m-4' />
            <h2 className='font-bold text-white max-sm-pn:text-sm'>+234-9161294323 </h2>
          </a>
        </div>
        <div className='flex flex-col items-end'>
          <a href={"mailTo:admin@realcloudexperts.com.ng"} target='_blank' className='flex items-center'>
            <h2 className='font-bold text-white max-sm-pn:text-sm'>admin@realcloudexperts.com.ng</h2>
            <FontAwesomeIcon icon={faEnvelope} size='2xl' className='text-white w-10 m-4' />
          </a>
        </div>
        <div className='flex flex-col'>
          <a href={"https://www.facebook.com/realclouddevops"} target='_blank' className='flex items-center'>
            <FontAwesomeIcon icon={faFacebook} size='2xl' className='text-white w-10 m-4' />
            <h2 className='font-bold text-white max-sm-pn:text-sm'>realclouddevops</h2>
          </a>
          <a href={"/"} target='_blank' className='flex items-center'>
            <FontAwesomeIcon icon={faXTwitter} size='2xl' className='text-white w-10 m-4' />
            <h2 className='font-bold text-white max-sm-pn:text-sm'>...</h2>
          </a>
          <a href={"https://www.instagram.com/realclouddevopsexperts"} target='_blank' className='flex items-center'>
            <FontAwesomeIcon icon={faInstagram} size='2xl' className='text-white w-10 m-4' />
            <h2 className='font-bold text-white max-sm-pn:text-sm'>realclouddevopsexperts</h2>
          </a>
        </div>
        <div className='flex flex-col justify-center items-center mt-5'>
          <p className='text-white max-pn:text-sm'>2024 © Copy rights reserved</p>
          <a href={"https://nnorom.netlify.app"}>
            <p className='text-white font-bold underline max-pn:text-sm'>BY NNOROMIV</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer