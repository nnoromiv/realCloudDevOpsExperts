import { DIAGON } from '../assets'
import { BENEFITS } from '../constants'


const Benefits = () => {

    return (
        <div className='bg-auLightBlue h-[100vh] p-10 text-center max-pn:p-5'>
            <div>
                <img src={DIAGON} width={500} height={500} alt='Image' className={`absolute w-[900px] right-0 max-lt:w-full `} />
                {
                    BENEFITS.map((item, index: number) => (
                        <div key={index} className='mb-20'>
                            <h1 className={`font-higuen text-auBlue text-8xl max-tb:text-6xl max-sm-pn:text-5xl`}>{item.title}</h1>
                            <ol className='mt-10 text-xl text-black max-sm-pn:text-base'>
                                {
                                    item.features.map((item, index: number) => (
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