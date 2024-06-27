import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${5}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
       <div className='h-[20rem]'>
        <img src={product.imageUrl}
        alt='' />
       </div>

       <div className='textPart bg-white p-3'>
        <div>
            <p className='font-bold opacity-60'>{product.branch}</p>
            <p className=''>{product.title}</p>
        </div>
        <div className='flex items-center'>
            <p className='font-semibold'>{product.discountedPrice}</p>
            <p className='line-through opacity-50'>{product.price}</p>
            <p className='text-green-600 font-semibold'>{product.discountPersent}% sale off</p>
        </div>
       </div>

    </div>
  )
}

export default ProductCard