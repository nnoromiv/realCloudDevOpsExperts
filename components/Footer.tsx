import React from 'react'
import { higuen } from '../styles/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-[100vh] flex'>
      <div className='w-1/2 h-full bg-white p-10 flex flex-col justify-between'>
        <h1 className={`${higuen.className} text-auBlue text-7xl`}>What to Expect?</h1>
        <h1 className={`${higuen.className} text-black text-6xl mt-3`}>Interview Preparation</h1>
        <h1 className={`${higuen.className} text-black text-6xl mt-3`}>Resume Building</h1>
        <h1 className={`${higuen.className} text-black text-6xl mt-3`}>Linkedin Optimization</h1>
        <h1 className={`${higuen.className} text-black text-6xl mt-3`}>Production Live Projects</h1>
      </div>
      <div className='w-1/2 h-full bg-auBlue p-10 flex flex-col justify-between'>
        <div className='flex flex-col'>
          <Link href={"https://wa.link/jbxg5v"} target='_blank' className='flex items-center'>
            <FontAwesomeIcon icon={faWhatsapp} size='2xl' className='text-white w-10 m-4' />
            <h2 className='font-bold text-white'>+1-567-803-7089</h2>
          </Link>
          <Link href={"https://wa.link/1v3as8"} target='_blank' className='flex items-center'>
            <FontAwesomeIcon icon={faWhatsapp} size='2xl' className='text-white w-10 m-4' />
            <h2 className='font-bold text-white'>+234-9161294323 </h2>
          </Link>
        </div>
        <div className='flex flex-col items-end'>
          <Link href={"mailTo:admin@realcloudexperts.com.ng"} target='_blank' className='flex items-center'>
            <h2 className='font-bold text-white'>admin@realcloudexperts.com.ng</h2>
            <FontAwesomeIcon icon={faEnvelope} size='2xl' className='text-white w-10 m-4' />
          </Link>
        </div>
        <div className='flex flex-col'>
          <Link href={""} target='_blank' className='flex items-center'>
            <FontAwesomeIcon icon={faFacebook} size='2xl' className='text-white w-10 m-4' />
            <h2 className='font-bold text-white'>RealCloudOps</h2>
          </Link>
          <Link href={""} target='_blank' className='flex items-center'>
            <FontAwesomeIcon icon={faXTwitter} size='2xl' className='text-white w-10 m-4' />
            <h2 className='font-bold text-white'>_realCloudOps</h2>
          </Link>
          <Link href={""} target='_blank' className='flex items-center'>
            <FontAwesomeIcon icon={faInstagram} size='2xl' className='text-white w-10 m-4' />
            <h2 className='font-bold text-white'>realCloudOps_</h2>
          </Link>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-white'>2024 © Copy rights reserved</p>
          <Link href={"https://nnorom.netlify.app"}>
            <p className='text-white font-bold underline'>BY NNOROMIV</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer