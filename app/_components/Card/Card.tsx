import { productInterface } from '@/app/_utils/interface'
import React from 'react'
import { FcRating } from 'react-icons/fc'

const Card = ({product}: {product: productInterface}) => {
    
  return (
    <div className='w-56'>
        <div className='w-full py-3  px-8 '>
            <img src={product?.image} alt="" className="w-full object-contain h-40 mx-auto" />
        </div>
        <div className='bg-gray-200 flex flex-col gap-1 py-2 px-3 text-center rounded-b-lg shadow'>
            <p className='text-xs font-medium'>{product?.title}</p>
            <p className='text-xs text-gray-500 flex items-center justify-center gap-1'><FcRating />{product?.rating?.count}</p>
            <p className='text-md text-blue  '>{product?.price}</p>
            <button className='bg-blue text-white p-2 text-xs hover:bg-opacity-70'>Add to Cart</button>
        </div>

    </div>
  )
}

export default Card