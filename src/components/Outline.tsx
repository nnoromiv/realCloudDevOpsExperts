
import { TRAINING } from '../constants'


const Outline = () => {

  return (
    <div className='bg-auLightBlue h-fit p-10 text-center max-pn:p-5'>
      <div>
        {
          TRAINING.map((item, index: number) => (
            <div key={index} >
              <h1 className={`font-higuen text-auBlue text-7xl max-tb:text-5xl max-sm-pn:text-4xl`}>{item.name}</h1>
              <div className="mockup-window border border-white mt-10" >
                <div className="flex flex-col justify-center text-left px-4 py-4 bg-white">
                  <img src={item.image} alt='Image' width={500} height={500} className={`w-full h-[200px] object-cover`} />
                  <h1 className={`mt-4 text-auBlue font-bold text-xl max-sm-pn:text-base font-aBeeZee`}>{item.title}</h1>
                  <ul className='mt-2 text-xl text-black max-lt:text-lg max-tb:text-base max-sm-pn:text-sm' >
                    {item.features.map((item, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Outline