import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import Image from 'next/image'

const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div className='m-2'>
      <Link href={`/product/${slug.current}`}>
        <div className='cursor-pointer scale-100 transition-transform duration-500 ease-in-out text-[#324d67] hover:scale-110 '>
          <img src={urlFor(image && image[0])}
          alt='image'
          className='rounded-[15px] bg-[#ebebeb] scale-100 transition-transform duration-500 ease-in-out bg-no-repeat w-[250px] h-[250px] sm:w-[150px] sm:h-[150px]'
          />
          <p className='font-medium sm:flex sm:flex-col sm:justify-center sm:text-center sm:text-sm'>{name}</p>
          <p className='font-extrabold mt-2 text-black sm:text-center sm:text-sm'>${price}</p>
        </div>
    </Link></div>
  )
}

export default Product