import React from 'react'

import { client } from '../lib/client';
import { Product,HeroBanner } from '../components';

const Home = ({products,bannerData}) => {
  return (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <div className='text-center my-10 text-[#324d67]'>
      <h2 className='text-5xl font-extrabold'>Best Selling Products</h2>
      <p className='text-base font-extralight'>Electronics with a lot of variations</p>
    </div>
    <div className='flex flex-wrap justify-center gap-15 mt-20 w-full md:mt-3'>
      {products?.map((product)=><Product key={product._id} product={product} />)}
    </div>
    </div>
  )
}
export const getServerSideProps=async()=>{
  const query='*[_type=="product"]';
  const products=await client.fetch(query);
  const bannerQuery='*[_type=="banner"]';
  const bannerData=await client.fetch(bannerQuery);

  return {
    props:{products,bannerData}
  }
}
export default Home;