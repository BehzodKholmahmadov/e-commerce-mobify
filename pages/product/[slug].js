import React,{useState} from 'react'
import { AiOutlineMinus,AiOutlinePlus,AiFillStar,AiOutlineStar } from 'react-icons/ai'

import {client,urlFor} from '../../lib/client';
import { Product} from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({product,products}) => {
    const {image,name,details,price}=product;
    const [index,setIndex]=useState(0);
    const {decrement,increment,qty,onAdd,setShowCart,} = useStateContext();

    const handleBuyNow=()=>{
        onAdd(product,qty);
        setShowCart(true);
    }

  return (
    <div>
        <div className='flex gap-10 m-10 mt-[60px] text-[#324d67] md:flex-wrap'>
            <div>
                <div className=''>
                    <img src={urlFor(image && image[index])} className='rounded-2xl bg-[#ebebeb] w-[400px] h-[400px] cursor-pointer transition-transform duration-300 ease-in-out hover:bg-[#f02d34] md:w-[350px] md:h-[350px] sm:w-[250px] sm:h-[250px]'  />
                </div>
                <div className='flex gap-3 mt-5'>
                    {image?.map((item,i)=>(
                        <img
                        key={i}
                        src={urlFor(item)}
                        className={i=== index ? 'rounded-lg bg-[#ebebeb] w-[70px] h-[70px] cursor-pointer hover:bg-[red]':'rounded-lg bg-[#ebebeb] w-[70px] h-[70px] cursor-pointer'}
                        onMouseEnter={()=>setIndex(i)}
                        />
                    ))}
                </div>
            </div>
            <div className='w-[400px] h-[400px]'>
                <h1 className='text-xl font-bold text-[#384d67]'>{name}</h1>
                <div>
                    <div className='mt-[10px] flex gap-1 items-center text-red-500'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/> 
                        <p className='text-[#324d67] mt-0'>
                        (20)
                    </p>
                    </div>
                </div>
                <h4 className='mt-2'>Details:</h4>
                <p className='mt-1 w-full'>{details}</p>
                <p className='font-bold text-2xl mt-7 text-[#f02d34]'>${price}</p>
                <div className="flex gap-5 mt-2 items-center">
  <h3 className=' flex font-bold text-xl text-[#324d67]'>Quantity:</h3>
   {/* <div className= 'w-[120px] h-[40px] flex justify-center items-center border border-gray-500 rounded-sm'>
    <div className='flex flex-col justify-center items-center w-[40px]  border-r-2  border-solid border-[gray]'>
       <span className='text-[rgb(49,168,49)] mr-2 '><AiOutlinePlus/>
        </span>
    </div>
    <div className='flex flex-col justify-center items-center w-[40px]'>
     <span className='border-none rounded-md text-xl'>{qty}</span>
    </div>
    <div className='flex flex-col justify-center items-center w-[35px] border-l-2 border-solid border-[gray]'>
      <span className='text-[#f02d34] '>
        <AiOutlineMinus/>
      </span>
    </div>
  </div>  */}
   <div className="flex flex-row justify-between items-center sm:flex-col">
            <div className="flex flex-row justify-between items-center gap-2 sm:flex-col sm:gap-0">
              <button className="border rounded-sm border-gray-500 text-green-500 bg-white px-8 py-3 cursor-pointer sm:p-2" onClick={increment} ><AiOutlinePlus/></button>
              <span className="text-xl px-4 py-2">{qty}</span>
              <button className="border rounded-sm border-gray-500 bg-white text-red-500 px-8 py-3 cursor-pointer sm:p-2" onClick={decrement}><AiOutlineMinus/></button>
            </div>
          </div>

</div>


                <div className='flex gap-8 sm:flex-col sm:gap-0'>
                    <button type='button' className='p-3 md:p-4 border-2 border-red-600 mt-10 text-lg md:text-xl font-semibold bg-white text-red-600 cursor-pointer w-52 transform transition-transform duration-500 ease  hover:scale-110 md:w-36' onClick={()=>onAdd(product,qty)}>Add to cart</button>
                    <button type='button' className='buttons buy-now w-52 p-2 md:p-4 bg-red-600 text-white border-0 mt-10 text-lg md:text-xl font-semibold cursor-pointer  transition-transform duration-500 ease transform-gpu hover:scale-110 md:w-36' onClick={handleBuyNow} >Buy Now</button>
                </div>
            </div>
        </div>
        <div className='mt-32 sm:flex '>
            <h2 className='text-center m-12 text-[#324d67] text-3xl font-bold sm:hidden '>You may also like</h2>
            <div className='marquee sm:hidden'>
                <div className='maylike-products-container track'>
                    {products.map((item)=>(
                        <Product key={item._id}
                        product={item}/>
                    ))}
                </div>
            </div>
        </div>
        <div className='sm:flex sm:flex-col sm:justify-center sm:items-center  md:hidden hidden'>
        <h2 className=' sm:text-center sm:mt-16 sm:text-[#324d67] sm:text-xl sm:font-bold'>You may also like</h2>
        <div className='h-full relative'>
                <div className=''>
                    {products.map((item)=>(
                        <Product key={item._id}
                        product={item}/>
                    ))}
                </div>
                </div>
        </div>
    </div>
  )
}
export const getStaticPaths=async()=>{
    const query=`*[_type== "product"]{
        slug {
            current
        }
    }`;
    const products=await client.fetch(query);
    const paths=products.map((product)=>({
        params:{
            slug:product.slug.current
        }
    }));
    return {
        paths,
        fallback:'blocking'
    }
}

export const getStaticProps=async({params:{slug}})=>{
    const query=`*[_type=="product" && slug.current == '${slug}'][0]`;
    const productsQuery='*[_type=="product"]'

    const product=await client.fetch(query);
    const products=await client.fetch(productsQuery)

    return {
      props:{products,product}
    }
  }

export default ProductDetails