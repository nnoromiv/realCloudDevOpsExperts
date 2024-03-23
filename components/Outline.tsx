import React from 'react'
import { aBeeZee, higuen } from '../styles/fonts'
import Image from 'next/image'
import { TRAINING } from '../constants'

const Outline = () => {
  return (
    <div className='bg-auLightBlue h-fit p-10 text-center'>
      {
        TRAINING.map((item: any, index: number) => (
          <div key={index}>
            <h1 className={`${higuen.className} text-auBlue text-7xl`}>{item.name}</h1>
            <div className="mockup-window border border-white mt-10" >
              <div className="flex flex-col justify-center text-left px-4 py-4 bg-white">
                <Image src={item.image} alt='Image' width={500} height={500} className={`w-full h-[200px] object-cover`} />
                <h1 className={`mt-4 text-auBlue font-bold text-xl ${aBeeZee.className}`}>{item.title}</h1>
                <ul className='mt-2 text-xl text-black' >
                  {item.features.map((item:any, index:number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Outline