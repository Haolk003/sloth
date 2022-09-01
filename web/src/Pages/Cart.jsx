import React, { useState } from 'react'
import {AiOutlineMinus} from 'react-icons/ai';
import { IoAddOutline } from 'react-icons/io5';
import {FaTrash} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { cartActions } from '../context/product-cart';
import {Link} from 'react-router-dom';
const Cart = () => {
  const dispatch=useDispatch();
  const cartData=useSelector((state)=>state.cart.Cartdata);
const user=useSelector((state)=> state.login.user);
 
  const [totalPrice ,setTotalPrice]=useState(0);
 useEffect(()=>{
  if(cartData.length !==0){
     setTotalPrice(cartData.reduce(function(total,num){
      if(num.request){
          return (total + num.total)  
      }
      else{
        return total;
      }
    
    },0
 ))
  }
 },[cartData]);

  return (
    <div className='pt-[100px] pb-[200px]'>
        <div className='w-full bg-[#e2c7c7] py-[50px] opacity-80'>    
      <h1 className='text-[#331200] text-3xl font-semibold ml-[200px]'><span className='text-[#993300]'>Home</span> / Cart</h1>
      </div>

      {cartData.length!==0 ? <div>
        <div className='md:w-[80%] w-full mx-auto relative'>
        <div className='flex text-center py-5 border-2 border-b-gray-400'>
            <div className='w-[30%]'>Item</div>
            <div className='w-[20%]'>Price</div>
            <div className="w-[20%]">Quanlity</div>
            <div className='w-[20%]'>Subtotal</div>
        </div>
        {cartData && cartData.map((item)=>{
          return(
            <div key={item.id} className='flex items-center py-6 relative'>
            <div className='w-[30%] flex items-center gap-4'>
              <input type="checkbox" className='mr-3 w-5 h-5'onChange={()=> dispatch(cartActions.ToggleRequest(item.id))} checked={`${item.request ? 'checked' : ''}`}  />
            <img src={item.image} alt={item.image} className='md:w-[80px] w-[50px] h-[50px] object-cover rounded-md' />
            <div>
                <h3 className='font-semibold'>{item.name}</h3>  
                <div className='flex items-center'>
                    <div className='mr-2'>Color:</div> 
                    <div className='w-5 h-5 rounded-lg' style={{background:item.color}}></div>
                    </div>
                </div>

            </div>
            <div className='w-[20%] text-center text-[#975938] tracking-wide'>
                ${item.price}
            </div>
            <div className='w-[20%] flex justify-center'>
            <div className='flex items-center gap-3 text-2xl   '>
                <AiOutlineMinus  className="cursor-pointer" onClick={()=>dispatch(cartActions.MinusQuanlity(item.id))} />
                <span className='font-semibold text-2xl'>{item.quanlity}</span>
                <IoAddOutline  className="cursor-pointer" onClick={()=> dispatch(cartActions.AddQuanlity(item.id))}/>
              </div> 
            </div>
            <div className='w-[20%] text-center'>
                ${(item.total).toFixed(2)}
            </div>
            <div className='absolute right-0 top-[50%] -translate-y-[50%] bg-red-600 text-white py-[6px] px-[6px] text-xs cursor-pointer rounded-md' onClick={()=> dispatch(cartActions.RemoveCart(item.id))}><FaTrash /></div>
        </div>
          )
        })}
        <div className='relative my-8 '>
       <Link to="/product" className='bg-[#804747] text-white text-lg tracking-wide px-2 py-1 rounded-md '>Continue Shopping</Link>
       <button className='absolute right-0 top-10 bg-black text-white tracking-wide px-2 py-1 rounded-md' onClick={()=> dispatch(cartActions.RemoveAll())}>Clear Shopping Cart</button>
       </div>
       
       <div className='flex justify-end'>
       <div className='px-8 border-2 border-gray-400 w-[400px] py-6 mt-10 rounded-md'>
        <div className='flex items-center font-[500] mb-3'>
        <h3 className='w-[250px] '>Subtotal: </h3>
        <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className='flex items-center border-b-2 border-gray-300 pb-4 mb-4'>
        <p className='w-[250px]'>Shipping Fee:</p>
        <span> ${totalPrice ? 5.34 : 0  }</span>
       
        </div>
        <div className='font-semibold text-2xl flex items-center'>
          <h2 className='w-[250px]'>Order Total:</h2>
          <span>${totalPrice ? (totalPrice + 5.34).toFixed(2) : 0}</span>
        </div>
       </div>
        </div>

        {totalPrice!==0 && <div className='flex justify-end'>
        {!user && <Link className='w-[400px] h-[40px] bg-amber-800 rounded-md mt-3 text-white tracking-wide text-base hover:bg-amber-600 duration-100  transition-all text-center leading-[40px]' to='/login'>Login</Link>}
        {user && <Link className='w-[400px] h-[40px] bg-amber-800 rounded-md mt-3 text-white tracking-wide text-base hover:bg-amber-600 duration-100  transition-all text-center leading-[40px]' onClick={()=>dispatch(cartActions.TotalPrice(totalPrice + 5.34))}  to="/checkout">Checkout</Link>}
        </div>
        }

      </div>
  
    </div>:<></>
}
{cartData.length==0 && 
    <div className='flex flex-col items-center'>
      <h2 className='text-3xl font-semibold mt-[200px]'>Your cart is empty</h2>
      <Link to='/product' className='cursor-pointer bg-[#782e2e] px-5 py-1 rounded-md text-white tracking-wider mt-3 '>FILL IT</Link>
    </div>
    }
    </div>
  )
}

export default Cart;