import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='relative h-[500px] w-full bg-gray-300 rounded-xl py-[100px] px-[40px] leading-9 md:h-[550px] md:leading-4 sm:h-[350] '>
    <div>
      <p className='text-xl md:mt-36 sm:text-center'>{heroBanner.smallText}</p>
      <h3 className='text-7xl mt-1 font-semibold md:text-3xl  sm:text-2xl sm:text-center '>{heroBanner.midText}</h3>
      <h1 className='text-white text-8xl ml-[-10px] uppercase font-bold md:text-5xl sm:text-3xl sm:text-center'>{heroBanner.largeText1}</h1>
      <img className='absolute top-[0%] right-[20%] w-[450px] h-[450px] md:w-[77%] md:h-[61%] md:top-[-2%] md:right-[-6%] sm:w-[80%] sm:h-[50%] sm:right-[10%]' src={urlFor(heroBanner.image)} alt='mobilephones'/>
      <div className='sm:flex sm:justify-center '>
      <Link href={`/product/${heroBanner.product}`}>
          <button className='rounded-2xl py-3 px-4 bg-[#f02d34] text-white border-none mt-10 text-xl font-medium cursor-pointer z-[10000] hover:scale-110 md:mt-[91px] md:z-[10000] sm:mt-[140px] sm:mr-7' type='button'>{heroBanner.buttonText}</button>
        </Link>
        <div className='absolute right-[10%] bottom-[5%] w-80 leading-[1.3] flex flex-col text-[#324d67] md:bottom-16 sm:items-center sm:self-center sm:mb-12'>
          <h5 className='mb-3 font-bold text-base text-end '>Description</h5>
          <p className='text-[#5f5f5f] font-thin text-end sm:text-center '>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroBanner;