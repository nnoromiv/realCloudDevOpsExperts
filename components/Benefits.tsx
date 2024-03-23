import React from 'react'
import { higuen } from '../styles/fonts'
import Image from 'next/image'
import { DIAGON } from '../assets/assets'
import { BENEFITS } from '../constants'

const Benefits = () => {
    return (
        <div className='bg-auLightBlue h-[100vh] p-10 text-center'>  
            <Image src={DIAGON} width={500} height={500} alt='Image' className={`absolute w-[900px] right-0 `} />      
            {
                BENEFITS.map((item: any, index: number) => (
                    <div key={index} className='mb-20'>
                        <h1 className={`${higuen.className} text-auBlue text-8xl`}>{item.title}</h1>
                        <ol className='mt-10 text-xl text-black'>
                            {
                                item.features.map((item:any, index: number) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ol>
                    </div>
                ))
            }
        </div>
    )
}

export default Benefits