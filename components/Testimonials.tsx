import React from 'react'
import { higuen } from '../styles/fonts'
import { TESTIMONIAL } from '../constants'

const Testimonials = () => {
    return (
        <div className='bg-auLightBlue h-fit p-10 text-center'>
            <h1 className={`${higuen.className} text-auBlue text-7xl`}>Client Testimonials</h1>
            {
                TESTIMONIAL.map((item: any, index: number) => (
                    <div className={`mt-10 border border-auBlue rounded-2xl flex gap-6 p-4`} key={index}>
                        <div className={`w-[30vw] text-left text-auBlue`}>
                            <h1>{item.name}</h1>
                            <p>{item.company}</p>
                        </div>
                        <h1 className={`w-[70vw] text-right text-black`}>
                            {item.message}
                        </h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Testimonials