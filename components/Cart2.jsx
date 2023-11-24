
import { Dialog, Transition } from '@headlessui/react'
import React, {useRef,Fragment} from 'react';
import Link from 'next/link'
import { AiOutlineMinus,AiOutlinePlus,AiOutlineRight,AiOutlineShopping } from 'react-icons/ai';

import {TiDeleteOutline} from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';

import { urlFor } from '../lib/client';

import getStripe from '../lib/getStripe';


const Cart2=()=> {

  const cartRef=useRef();
  const{totalPrice,totalQuantities,cartItems,setShowCart,toggleCartItemQuantity,Delete}=useStateContext();

  const handleCheckout=async()=>{
    const stripe=await getStripe();
    const response=await fetch('/api/stripe',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(cartItems),
    });
    if(response.statusCode===500) return;

    const data=await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({sessionId:data.id});
  }

  return (
    <Transition show={true} as={Fragment} ref={cartRef} >
      <Dialog as="div" className="fixed" onClose={()=>preventDefault}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-1000'
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-all  ease-linear duration-1000" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden" ref={cartRef}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between md:w-[415px] md:p-1"> 
                      <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title><span className='ml-3 text-[#f02d34]'>({totalQuantities} items)</span>
                      <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 "
                            onClick={() => setShowCart(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <AiOutlineRight className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>          
                      </div>
                      {cartItems.length < 1 &&(
            <div className='m-0 text-center'>
              <div className='flex items-center justify-center text-center'> <AiOutlineShopping size={150} /></div>
             
              <h3 className='font-semibold text-xl'>Your busket is Empty</h3>
              <Link href='/'>
                <button
                type='button'
                onClick={()=>setShowCart(false)}
                className='w-full max-w-[400px] px-3 py-3 rounded-2xl border-none text-xl mt-10 uppercase bg-[#f02d34] text-[white] cursor-pointer scale-100 transition-transform duration-500 ease-linear hover:scale-110 md:text-base sm:text-sm md:px-1 md:py-1' >Continue shopping</button>
              </Link>
            </div>
          )}
                      <div className="mt-8 md:mt-3">
                        {cartItems.length >= 1 && cartItems.map((item) =>(
                        <div className="flow-root md:px-4 py-1" key={item._id} >
                          <ul role="list" className="my-2 divide-y divide-gray-200">
                              <li key={item._id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 md:m-[25%] md:h-[25%]">
                                  <img
                                    alt='selled-image'
                                    src={urlFor(item?.image[0] )}
                                    className="h-full w-full object-cover object-center cursor-pointer  hover:bg-[red] "
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-lg font-medium text-gray-900">
                                      <h3 className='text-[#324d67]'>{item?.name}</h3>
                                      <p  className="ml-4 text-[#324d67]">${item.price}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="text-[#324d67] font-medium text-lg"> <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center gap-2">
              <button className="border-0 rounded-sm border-gray-500 text-green-500 bg-white px-1 py-1 cursor-pointer" onClick={()=>toggleCartItemQuantity(item._id,'increment')} ><AiOutlinePlus/></button>
              <span className="border text-base px-4 py-2">{item.quantity}</span>
              <button className="border-0 rounded-sm border-gray-500 bg-white text-red-500 px-1 py-1 cursor-pointer" onClick={()=>toggleCartItemQuantity(item._id,'decrement')} ><AiOutlineMinus/></button>
            </div>
          </div></div>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-2xl text-[#f02d34] cursor-pointer bg-transparent border-none "
                                        onClick={()=>Delete(item)}
                                      >
                                       <TiDeleteOutline/>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            
                          </ul>
                        </div>
                        ) )}
                      </div>
                    </div>
                    {cartItems.length >=1 && (
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="w-[400px] m-auto">
                       <button 
                       onClick={handleCheckout}
                       type='button'
                       className='w-full max-w-[400px] px-3 py-3 rounded-2xl border-none text-xl mt-10 uppercase bg-[#f02d34] text-[white] cursor-pointer scale-100 transition-transform duration-500 ease-in-out hover:scale-110'
                       >Pay with Stripe</button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p className='mr-3'>
                          or
                      
                        </p>    <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500 mr-6"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                      </div>
                    </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Cart2