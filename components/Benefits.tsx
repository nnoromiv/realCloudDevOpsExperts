import React, { useRef } from 'react'
import { higuen } from '../styles/fonts'
import Image from 'next/image'
import { DIAGON } from '../assets/assets'
import { BENEFITS } from '../constants'
import { useInView } from 'framer-motion'


const Benefits = () => {
    const ref = useRef<Element>(null) as any
    const isInView = useInView(ref, { once: true, amount: 'some'})

    return (
        <div className='bg-auLightBlue h-[100vh] p-10 text-center max-pn:p-5'>
            <div ref={ref} className={`
            ${isInView ? 'transform-none opacity-1' : '-translate-x-[100%] opacity-0'
                }
            transition-all duration-2000 ease-in-out delay-1500
            `}>
                <Image src={DIAGON} width={500} height={500} alt='Image' className={`absolute w-[900px] right-0 max-lt:w-full `} />
                {
                    BENEFITS.map((item: any, index: number) => (
                        <div key={index} className='mb-20'>
                            <h1 className={`${higuen.className} text-auBlue text-8xl max-tb:text-6xl max-sm-pn:text-5xl`}>{item.title}</h1>
                            <ol className='mt-10 text-xl text-black max-sm-pn:text-base'>
                                {
                                    item.features.map((item: any, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ol>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Benefits