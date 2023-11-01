import React from 'react'
import Router from 'next/router';
import Link from 'next/link'
import {AiOutlineShopping,AiOutlineSearch} from 'react-icons/ai';

import {Cart2,Search,} from './'
import { useStateContext } from '../context/StateContext';


const Navbar = () => {  
  const {showCart,setShowCart,totalQuantities,setShowSearch,showSearch,searchTerm,setSearchTerm}=useStateContext(); 
  const router=Router;
const handleSearch=()=>{
  if(searchTerm.length > 0 ) router.push(`/search/${searchTerm}`)
}
  return (
<div className='sticky top-0 bg-[red] shadow-md rounded-lg  flex items-center justify-between px-8 py-5 mb-3 sm:flex-col sm:justify-center sm:m-0 sm:px-0 '>
    <h1 className="w-3/12">
        <Link href='/' className="text-2xl font-bold">
         Mobify
        </Link>
    </h1>
    <div className='flex flex-col w-full ml-[20%] '>
       <fieldset className="relative flex justify-center w-[70%] min-w-[400px] flex-wrap  md:hidden sm:hidden">    
            <input 
              type="search" 
              onChange={(e)=>setSearchTerm(e.target.value)}
              value={searchTerm}  
              className='relative  block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-8 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-none focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-black' placeholder='Coming soon' data-dropdown-toggle="dropdown"/> 
      
      <button type='button' className='relative z-[2] flex items-center rounded-r bg-blue-500 px-6 py-2.5 text-lg font-bold uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg' onClick={handleSearch}><AiOutlineSearch/></button> 
    </fieldset>

</div>
    <div className="w-3/12 flex justify-end sm:justify-center">
      <div className='hidden sm:flex sm:justify-between md:block'>
    <button type='button' className='text-2xl text-[gray] cursor-pointer relative transition-transform duration-400 ease-in-out border-none bg-transparent mr-3' onClick={()=>setShowSearch(true)} > <AiOutlineSearch/></button>{showSearch && <Search/>}</div>
    <div className='hidden sm:block'>
    <button type='button' className='text-2xl text-[gray] cursor-pointer relative transition-transform duration-400 ease-in-out border-none bg-transparent' onClick={()=>setShowCart(true)} > <AiOutlineShopping/><span className='absolute right-[-8px] text-sm text-[#eee] bg-[#f02d34] w-5 h-5 rounded-[50%] text-center font-semibold'>{totalQuantities}</span> </button> {showCart && <Cart2/>}</div>
    
    
    <div className='sm:hidden '>
    <button type='button' className='text-2xl text-[gray] cursor-pointer relative transition-transform duration-400 ease-in-out border-none bg-transparent' onClick={()=>setShowCart(true)} > <AiOutlineShopping/><span className='absolute right-[-8px] text-sm text-[#eee] bg-[#f02d34] w-5 h-5 rounded-[50%] text-center font-semibold'>{totalQuantities}</span> </button> {showCart && <Cart2/>}</div>
    </div>
</div>

  )
}

export default Navbar