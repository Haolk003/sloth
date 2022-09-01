import React from 'react'
import { Link } from 'react-router-dom'
const CartCol = ({img,title,price,info,id}) => {
  return (  
    <div className='w-[100%] flex items-center '>
        <img src={img} alt={img} className="w-[500px] h-[200px] object-cover overflow-hidden rounded-md mr-5" />
        <div className=''>
            <h2 className='font-semibold text-2xl'>{title}</h2>
            <div className='text-[#804b2c] font-[600] tracking-wide'>${price}</div>
            <p className='text-[15px]'>{info}</p>
            <Link to={`/product/${id}`}><button className='mt-3 text-[10px] rounded-md px-3 py-1 bg-[#9a5928] text-white tracking-wide'>DETAILS</button></Link>    
        </div>
    </div>
  )
}

export default CartCol