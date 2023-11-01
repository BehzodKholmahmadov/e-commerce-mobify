import React from 'react'
import { FaHandHoldingDollar,FaMessage } from 'react-icons/fa6';
import {RiSecurePaymentFill} from 'react-icons/ri';
import {AiFillInstagram,AiOutlineTwitter,AiOutlineCopyrightCircle} from 'react-icons/ai';

const FooterBanner = () => {
  return (
    <div className="py-6 px-12 bg-[red]  relative h-[600px] leading-[1] text-white w-full  md:h-full md:mt-20 ">
    <div className="grid grid-flow-col gap-10 ml-24 md:grid md:grid-flow-row md:gap-6 md:ml-0">
    <div className=" md:w-full">
      <div className="flex  items-center w-[50%] md:w-full sm:w-full ">
        <FaHandHoldingDollar  className="w-10 h-10 mr-4 min-h-[40px] min-w-[40px]  text-black" />
        <div>
          <h3 className="text-2xl font-bold text-gray-800 sm:text-lg">Great sales</h3>
          <div className=''>
          <span className="text-white sm:text-xs">We offer more discounts everyday so don't miss your chance!</span></div>
        </div>
      </div>
    </div>
    <div className="md:w-full">
      <div className="flex items-center  w-[50%]  md:w-full ">
        <RiSecurePaymentFill className="w-10 h-10 mr-4 text-black  min-h-[40px] min-w-[40px]" />
        <div>
          <h3 className="text-2xl font-bold text-gray-800 sm:text-lg">Safe payment</h3>
          <span className="text-white sm:text-xs">Checkout quickly and securely with your favorite payment method.</span>
        </div>
      </div>
    </div>
    <div className="md:w-full">
      <div className="flex items-center  w-[50%]  md:w-full ">
        <FaMessage className="w-10 h-10 mr-4 text-black  min-h-[40px] min-w-[40px]" />
        <div>
          <h3 className="text-2xl font-bold text-gray-800 sm:text-lg">Help Center</h3>
          <span className="text-white sm:text-xs">24/7 assistance for a smooth and enjoyable shopping experience.</span>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-row justify-between mt-[8%] md:grid md:grid-flow-row md:gap-6 md:mt-24">
    <div>
       <h2 className="text-4xl font-extrabold text-black sm:text-2xl">Shopping</h2>
         <ul className="underline text-lg leading-[45px] sm:text-base">
      <li className=''>Support</li>
      <li>Sales</li>
      <li>Promotional code</li>
         </ul>
    </div>
    <div>
      <h2 className="text-4xl font-extrabold text-black  sm:text-2xl">Collaborate</h2>
      <ul className="underline text-lg leading-[45px]  sm:text-base">
        <li>Sell on Mobify</li>
        <li>Affliate</li>
        <li>Blog</li>
      </ul>
    </div>
    <div>
      <h2 className="text-4xl font-extrabold text-black  sm:text-2xl ">About company</h2>
      <ul className="underline text-lg leading-[45px]  sm:text-base">
        <li>Careers</li>
        <li>Mobitoken</li>
        <li>Blog about company</li>
        <li>About</li>
      </ul>
    </div>
    <div>
      <h2 className="text-4xl font-extrabold text-black  sm:text-2xl">Contacts</h2>
      <ul className="underline text-lg leading-[45px]  sm:text-base ">
        <li>Address</li>
        <li>Social media</li>
        <li>Email</li>
      </ul>
    </div>
    </div>
    <div className='mt-28 flex justify-between md:grid md:grid-flow-row md:leading-7'>
      <div className='flex underline justify-between md:grid md:grid-flow-row '>
        <a className=''>Privacy Policy</a>
        <a className='ml-3 md:ml-0'>User Agreement</a>
      </div>
    <div className=''>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark'>
          Mobify
        </a>
      </div>
      </div>
  </div>
  )
}

export default FooterBanner

