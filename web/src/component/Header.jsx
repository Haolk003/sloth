import React from 'react'
import Logo from '../album/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import {IoCart} from 'react-icons/io5';
import {FaUserPlus,FaUserMinus} from 'react-icons/fa';
import { LoginActions } from '../context/login-slice';
import { useDispatch, useSelector } from 'react-redux';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from 'react';
import { menuActions } from '../context/menu-slice';

const Header = () => {
  const user=useSelector((state)=> state.login.user);
  const quanlityCart=useSelector((state)=> state.cart.quanlityCart);
 
    const dispatch=useDispatch();
  return (
   
    <div className='w-[80%] h-[100px] flex items-center justify-between mx-auto'>
        <Link to='/'><img src={Logo} alt="" className='w-auto h-[60px]' /></Link>
        <div className='lg:flex items-center  hidden opacity-0 lg:opacity-100  w-[60%] justify-between'>
        <div className='flex items-center gap-6 text-gray-500 '>
            <NavLink to='/' className="cursor-pointer relative after:absolute hover:after:w-[100%] after:h-[2px] after:bg-yellow-800 after:-bottom-2 duration-100 transition-all after:left-0 after:w-[0px] after:content-[''] px-3">Home</NavLink>
            <NavLink to="/about" className="cursor-pointer relative after:absolute hover:after:w-[100%] after:h-[2px] after:bg-yellow-800 after:-bottom-2 duration-100 transition-all after:left-0 after:w-[0px] after:content-[''] px-3">About</NavLink>
            <NavLink to="/product " className="cursor-pointer relative after:absolute hover:after:w-[100%] after:h-[2px] after:bg-yellow-800 after:-bottom-2 duration-100 transition-all after:left-0 after:w-[0px] after:content-[''] px-3">Product</NavLink>
          
        </div>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
            <p className='text-xl text-semibold'>Cart</p>
              <Link to='/cart' className='text-3xl relative cursor-pointer'><IoCart /> <span className='absolute bg-yellow-800 -top-2 -right-2 w-5  text-white h-5 flex items-center justify-center text-sm overflow-hidden rounded-full'>{quanlityCart }</span></Link>
            </div>
            {!user &&  <div className='flex items-center gap-2'>
                <p className='text-xl text-semibold'>Login</p>
               
                <Link to="/login"><div className='text-3xl cursor-pointer' ><FaUserPlus /></div></Link> 
               
            </div> }
           
            {user &&  <div className='flex items-center gap-2'>
                <p className='text-xl text-semibold'>Logout</p>
               
                <div className='text-3xl cursor-pointer' onClick={()=> dispatch(LoginActions.login(null))} ><FaUserMinus /></div></div> }
        </div>
        </div>
        <div className='relative lg:hidden block'>
          <GiHamburgerMenu className='absolute right-0 top-[50%] text-3xl -translate-y-[50%]' onClick={()=> dispatch(menuActions.OpenMenu())}/>
        </div>
    </div>
  
   
  )
}

export default Header