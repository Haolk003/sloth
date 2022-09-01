import React, { useEffect, useState } from 'react'
import { Home,Product,About,Navbar,SingleProduct,Cart,Login,Checkout } from './Pages' ;
import { Footer,SlideBar } from './component';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from './context/product-cart';
import { LoginActions } from './context/login-slice';

const App = () => {
  const dispatch=useDispatch();
  const user=useSelector((state)=> state.login.user);
  const cartData=useSelector((state)=> state.cart.Cartdata);
  const quanlityCart=useSelector((state)=> state.cart.quanlityCart)
  const [request,setRequest]=useState(false);
  const [requestUser,setRequestUser]=useState(false);
  const showMenu=useSelector((state)=> state.menu.showMenu);
  useEffect(()=>{
    if(request){    
 localStorage.setItem('cartItems',JSON.stringify(cartData));
 localStorage.setItem('quanlityItem',JSON.stringify(quanlityCart));
}
setRequest(true);
},[cartData]);
  useEffect(()=>{
    const fetchData=JSON.parse(localStorage.getItem('cartItems'));
    const fetchQuanlity=JSON.parse(localStorage.getItem('quanlityItem'));
    const users=JSON.parse(localStorage.getItem('userComfi'));
    dispatch(cartActions.ReplaceData(fetchData));
    dispatch(cartActions.ReplaceQuanlity(fetchQuanlity));
    dispatch(LoginActions.login(users))
    
  },[]);
  useEffect(()=>{
    if(cartData.lenght !==0){
      dispatch(cartActions.ReplaceQuanlity(cartData.reduce((total,num)=>total+num.quanlity,0 )))
    }
  },[cartData]); 
  
  useEffect(()=>{
    if(requestUser){
      localStorage.setItem('userComfi',JSON.stringify(user));
    }
    setRequestUser(true);  
  },[user])
 
  return (
    <div className=' bg-gray-200 relative overflow-x-hidden '>
     {showMenu && <SlideBar /> }
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='product' element={<Product />} />
                <Route path='about' element={<About />} />
               <Route path='product/:id' element={<SingleProduct />} />
               <Route path='cart' element={<Cart />} />
               <Route path='login' element={<Login />} />
               <Route path='checkout' element={<Checkout /> }/>
            </Routes>
     <Footer />
      
    </div>
  )
}

export default App