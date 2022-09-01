import React from 'react'
import Logo from '../album/logo.svg';
import { Link } from 'react-router-dom';
import {FaUserPlus,FaUserMinus} from 'react-icons/fa';
import {IoCart} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { LoginActions} from '../context/login-slice';
import {MdClose} from 'react-icons/md';
import { menuActions } from '../context/menu-slice';
const SlideBar = () => {    
    const quanlityCart=useSelector((state)=> state.cart.quanlityCart);
    const user=useSelector((state)=> state.login.user);
    const dispatch=useDispatch();
  return (
    <div className='fixed left-0 top-0 w-full h-full z-50 bg-white flex items-start  flex-col gap-10 py-5 '>
        <img src={Logo} alt={Logo} className="h-[40px] w-auto object-fill px-5"/>
        <Link to='/' className='hover:bg-slate-300  duration-300 py-4 w-full px-5 ' onClick={()=> dispatch(menuActions.closeMenu())}>Home</Link>
        <Link to='/about' className='hover:bg-slate-300  duration-300 py-4 w-full px-5' onClick={()=> dispatch(menuActions.closeMenu())}  >About</Link>
        <Link to='/product' className='hover:bg-slate-300  duration-300 py-4 w-full px-5' onClick={()=> dispatch(menuActions.closeMenu())}>Products</Link>
       
        <div className='flex items-center relative left-[50%] -translate-x-[50%] gap-10'>   
        <div className='flex items-center gap-2 '>
            <p className='text-xl text-semibold'>Cart</p>
              <Link to='/cart' className='text-3xl relative cursor-pointer' onClick={()=> dispatch(menuActions.closeMenu())}><IoCart /> <span className='absolute bg-yellow-800 -top-2 -right-2 w-5  text-white h-5 flex items-center justify-center text-sm overflow-hidden rounded-full'>{quanlityCart }</span></Link>
            </div>
        {!user &&  <div className='flex items-center gap-2'>
                <p className='text-xl text-semibold'>Login</p>
                <Link to="/login"><div className='text-3xl cursor-pointer' onClick={()=> dispatch(menuActions.closeMenu())}><FaUserPlus /></div></Link> 
               
            </div> }
           
            {user &&  <div className='flex items-center gap-2'>
                <p className='text-xl text-semibold'>Logout</p>
               
                <div className='text-3xl cursor-pointer' onClick={()=> dispatch(LoginActions.login(null))} ><FaUserMinus /></div></div> }
        </div>
        
        <div className='absolute right-5 top-5 text-red-500 text-4xl font-bold' onClick={()=> dispatch(menuActions.closeMenu())}><MdClose /></div>
    </div>
  )
}

export default SlideBar