import { TESTIMONIAL } from "../constants"

const Testimonials = () => {
    return (
        <div className='bg-auLightBlue h-fit p-10 text-center max-pn:p-5'>
            <h1 className={`font-higuen text-auBlue text-7xl max-tb:text-6xl max-sm-pn:text-5xl`}>Client Testimonials</h1>
            {
                TESTIMONIAL.map((item, index: number) => (
                    <div className={`mt-10 border border-auBlue rounded-2xl flex gap-6 p-4`} key={index}>
                        <div className={`w-[30vw] text-left text-auBlue`}>
                            <h1>{item.name}</h1>
                            <p>{item.company}</p>
                        </div>
                        <h1 className={`w-[70vw] text-right text-black max-tb:text-base max-sm-pn:text-sm`}>
                            {item.message}
                        </h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Testimonials