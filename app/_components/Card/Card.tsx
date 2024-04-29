import { AddProductToCart } from '@/app/_store/features/cartSlice'
import { useAppDispatch } from '@/app/_store/hooks'
import { productInterface } from '@/app/_utils/interface'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FcRating } from 'react-icons/fc'

const Card = ({product}: {product: productInterface}) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const handleAddToCart = (product:productInterface) => {
    dispatch(AddProductToCart(product))
  }

  const handleProductDetails = (productId: number) => {
    router.push(`/productDetails/${productId}` )
  }
    
  return (
    <div className='w-56'>
        <div className='w-full py-3  px-8 cursor-pointer' onClick={() => handleProductDetails(product.id)}>
            <Image src={product?.image} width={500} height={500} alt="" className="w-full object-contain h-40 mx-auto" />
        </div>
        <div className='bg-gray-200 flex flex-col gap-1 py-2 px-3 text-center rounded-b-lg shadow'>
            <p className='text-xs font-medium'>{product?.title}</p>
            <p className='text-xs text-gray-500 flex items-center justify-center gap-1'><FcRating />{product?.rating?.count}</p>
            <p className='text-md text-blue  '> ${product?.price}</p>
            <button className='bg-blue text-white p-2 text-xs hover:bg-opacity-70'
              onClick={() => handleAddToCart(product)}
            >Add to Cart</button>
        </div>

    </div>
  )
}

export default Card