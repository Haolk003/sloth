import React from 'react'
import { useSelector } from 'react-redux';
import { StripeContainer } from '../component'; 
import { Navigate } from 'react-router-dom';
const Checkout = () => {
  const user=useSelector((state)=> state.login.user);
  const total=useSelector((state)=> state.cart.totalsPrice);
  if(!user){
    return <Navigate to='/' />
   
  }
  return (

    <div className='py-[150px] h-screen '>

    <div className='w-full bg-[#e2c7c7] py-[50px] opacity-80'>
    <h1 className='text-[#331200] text-3xl font-semibold ml-[200px]'><span className='text-[#993300]'>Home</span> / Checkout</h1>
    </div>
    <div className='flex flex-col items-center '>
    <div className='mt-[80px]'>
      <p className='font-semibold text-2xl mb-3'>Hello, {user.email}</p>
      <p className='mb-3'>You total is <span className='font-semibold '>${total.toFixed(2)}</span></p>
      <p className='mb-4'>Test Card Numble : <span className='font-semibold'>4242 4242 4242 4242</span></p>
    </div>
     <StripeContainer />
    </div>
       
    </div>

  )
}

export default Checkout;