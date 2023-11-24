import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import {runFireworks} from '../lib/utils';

import { useStateContext } from '../context/StateContext';

const Success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities}=useStateContext();
   useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
   }, [setCartItems,setTotalPrice,setTotalQuantities]);
  return (
    <div className='bg-white min-h-[60vh]'>
        <div className='w-[1000px] m-auto mt-[160px] bg-[#dcdcdc] p-14 leading-4 flex justify-center items-center flex-col'>
            <p className='text-[green] text-[40px]'>
                <BsBagCheckFill />
            </p>
            <h2 className='capitalize mt-4 font-black text-4xl text-[#324d67]'>Thank you for your order</h2>
            <p className='text-base font-semibold text-center'>Check your email for receipt</p>
            <p className='text-base  font-semibold text-center m-3 mt-8'>If you have any questions, please email <a className='ml-1 text-[#f02d34]' href='mailto:mobify@gmail.com'>mobify@gmail.com</a> </p>
            <Link href='/'>
                <button type='button'  className='w-full max-w-[400xp] shadow-md py-3 px-[100px] rounded-2xl border-none text-xl mt-10 uppercase bg-[#f02d34] text-[#fff] cursor-pointer scale-110 transition-transform duration-500 ease-in-out hover:translate-y-1  '>Continue Shopping</button>
            </Link>
        </div>

    </div>
  )
}

export default Success