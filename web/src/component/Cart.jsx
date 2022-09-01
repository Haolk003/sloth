import React from 'react'
import {MdSearch} from 'react-icons/md';
import { Link } from 'react-router-dom';
const Cart = ({img,title,price,id,width}) => {
  return (
    <div className={`relative w-full md:w-300`}> 
    <div className='w-full md:h-[200px] h-[300px] relative '> 
        <img src={img} alt={img} className="w-[100%] h-[100%] object-fit hover:bg-[rgba(0,0,0,0.4)] rounded-sm" />
        <div className='absolute opacity-0 duration-300 transition-all w-[100%] h-[100%] left-0 top-0  hover:bg-[rgba(0,0,0,0.4)] rounded-sm hover:opacity-100 cursor-pointer flex items-center justify-center '>
            <Link to={`/product/${id}`}><MdSearch className='text-xl text-white bg-[#993333] w-[50px] h-[50px] rounded-full p-3 font-bold'  /></Link>
        </div>
        </div>
        <div className='flex items-center justify-between mt-3'>
            <h4 className='tracking-wide text-lg'>{title}</h4>
            <div className='tracking-wide text-[#993333]'>$ {price}</div>
        </div>
        
    </div>
  )
}

export default Cart;