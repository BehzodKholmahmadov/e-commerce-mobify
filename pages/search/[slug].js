import { useRouter } from 'next/router'
import React, {useEffect} from 'react'
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

import { client } from '../../lib/client';

const Busca = ({products, slug}) => {
    const {setSearchTerm} = useStateContext()
    useEffect(() => {
        if (products.length > 0) {
          setSearchTerm('');
        }
      },[products,setSearchTerm]);

    return (
        <div>
        <div className='flex justify-center items-center text-center' >
            <span>
                <p className='text-xl sm:mt-5'>Results for <strong>{slug}</strong></p>
            </span>
        </div>
        <div className='flex flex-wrap justify-center items-center mb-80  sm:mt-5'>
            {products?.length > 0 
                ?
                    products.map((productAc) => <Product key={productAc._id} product={productAc} /> )
                :
                    <div className='w-[1000px] m-auto mt-10 mb-60 bg-[#dcdcdc] p-14 leading-4 flex justify-center items-center flex-col'><p>Please contact us so we can order your desired product</p></div>
            }
        </div>
            
        </div>
    )
}

export async function getServerSideProps(context)  {
    const {slug} = context.query;
    const lowerSlug = slug.toLowerCase();

    const query = `*[_type == "product"]`
    const products = await client.fetch(query);
    let filterProducts = products.filter(item => item.name.toLowerCase().includes(lowerSlug))

    return {
        props: {
        products: filterProducts,
        slug: slug,
        }
    }
    }
export default Busca
