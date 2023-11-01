import { Dialog, Transition } from '@headlessui/react'
import React, {useRef,Fragment} from 'react';
import {AiOutlineRight,AiOutlineSearch } from 'react-icons/ai';
import Router from 'next/router';

import { useStateContext } from '../context/StateContext';



const Search = () => {
    const cartRef=useRef();
    const{setShowSearch,searchTerm,setSearchTerm}=useStateContext();
    const router=Router;
    const handleSearch=()=>{
      if(searchTerm.length > 0 ){ router.push(`/search/${searchTerm}`);
      setShowSearch(false);
    }
    };
  return (
       <Transition show={true} as={Fragment} ref={cartRef} >
      <Dialog as="div" className="relative z-1 w-full " onClose={setShowSearch}>
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

        <div className=" overflow-hidden w-full" ref={cartRef}>
          <div className="relative inset-0 overflow-hidden w-full">
            <div className="pointer-events-none fixed inset-y-0 w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-full ">
                  <div className=" overflow-y-scroll bg-white shadow-xl w-full p-1">
                    <div className=" overflow-y-auto ">
                      <div className="flex  flex-1 justify-start text-start items-start absolute ml-2 "> 
                      <Dialog.Title className="text-lg font-medium text-gray-900 ">Search</Dialog.Title>
                     
                      </div>
                       <div className="flex justify-end items-end ">
                          <button
                            type="button"
                            className="relative  text-gray-400 hover:text-gray-500 mt-1 mr-2 "
                            onClick={() => setShowSearch(false)}>
                            <AiOutlineRight className="" aria-hidden="true" />
                          </button>
                        </div> 
            <div className=" relative flex justify-center items-center w-full mt-10">
    <input type="text"  onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} id="email-adress-icon" className='bg-gray-50 border border-gray-300 text-gray-900  rounded-base focus:ring-blue-500 focus:border-blue-500 block w-3/4 pl-10 p-2 ' placeholder='...Search'/>
    </div>
                    
                    </div>
                      <div className="w-1/4 m-auto grid justify-center  text-center items-center mb-5">
                       <button 
                 
                         value={searchTerm} 
                         type='button'
                         className='w-full px-14 py-[10px] border-none text-xl mt-4 uppercase bg-[#f02d34] text-[white] cursor-pointer rounded-xl '
                      
                       ><AiOutlineSearch /></button>
                      </div>
                   
                     
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

export default Search;









// const SearchTerm=(value)=>{
//   if(cartItems && cartItems.length>0){  
//     const result=cartItems.filter((cartItems)=>{
//       return (
//         value
//          && cartItems.name 
//          && cartItems.name.toLowerCase().includes(value)
//       )
//     })
//     setResults(result);
//   } else{
//     setResults([]);
//   }
//   }
//   const handleSearch = (value) => {
//     setInput(value);
//     SearchTerm(value);
//   }



    {/* <div className=' absolute w-full bg-white flex justify-center flex-wrap rounded-xl mt-2 max-h-[300px] overflow-y-scroll  top-full left-0 right-0 z-50  shadow-mine transition-all duration-200 ease-in-out  '>
      
      <ul className='flex flex-col w-full'>
      
      {results.map((result, i) =>{
       return <div key={i} className='font-medium leading-5 p-4 cursor-pointer hover:bg-[#efefef] ' > <Link href={`/product/${result.slug.current}`}>{result.name}</Link></div>
     })} 
     </ul> 
 
   </div>  */}