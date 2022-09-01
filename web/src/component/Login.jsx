import React from 'react'
import { useState } from 'react'
import {auth } from '../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,FacebookAuthProvider,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import { LoginActions } from '../context/login-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
const Login = () => {
  const dispatch=useDispatch();
  const user=useSelector((state)=> state.login.user);
  const [status,setStatus]=useState('SignIn');
  const [data,setData]=useState({});
  const [errorSignIn,setErrorSignIn]=useState(false);
  const [errorSignUp,setErrorSignUp]=useState(false);
  const provider=new FacebookAuthProvider();
  const provider2=new GoogleAuthProvider();
const handleSignUp=()=>{
createUserWithEmailAndPassword(auth,data.email2,data.password2)
.then((userCredential)=>{
  const user =userCredential.user;
  setData({...data,email2:"",password2:""});
})
.catch((error)=>{
  const errorCode=error.code;
  const errorMessage=error.message;
   setErrorSignUp(true);
  setData({...data,email2:"",password2:""});
 
});

}
const handleSignIn=()=>{
  signInWithEmailAndPassword(auth,data.email,data.password)
  .then((userCredential)=>{
    const user=userCredential.user;
    dispatch(LoginActions.login(user)); 
    setData({...data,email:"",password:""});
  })
  .catch((error)=>{
    const errorCode=error.code;
    const errorMessage=error.message;
    setData({...data,email:"",password:""});
    setErrorSignIn(true);
  })
}
const handleInput=(e)=>{
  const newInput={[e.target.name]:e.target.value};
  setData({...data,...newInput});

}
const LoginFacebook=()=>{
signInWithPopup(auth,provider)  
.then((result)=>{
  const user = result.user;
dispatch(LoginActions.login(user));
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
})
.catch((error)=>{
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = FacebookAuthProvider.credentialFromError(error);
})
}
const GoogleLogin=()=>{
  signInWithPopup(auth,provider2)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    dispatch(LoginActions.login(user));
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
useEffect(()=>{
console.log(user);
},[user]);
if(user){
  return ( <Navigate to='/' />)
}
  return (
   
      <div className='w-[400px]  bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md px-3 py-6'>
          <div className='flex items-center justify-between text-center '>
            <p onClick={()=> setStatus('SignIn')} className={`w-[50%] pb-3 ${status === "SignIn" && 'border-b-2 border-gray-800 '}` }>SIGN IN</p>
            <p onClick={()=> setStatus('SignUp')} className={`w-[50%] pb-3 ${status === "SignUp" && 'border-b-2 border-gray-800 '}` }>SIGN UP</p>
          </div>
        {status === 'SignIn' && 
        <div className='mt-4'>
          <input type='email' value={data.email} placeholder='User name' className='w-full rounded-full mb-3 py-1 px-3 bg-violet-200' name='email' onChange={(e)=> handleInput(e)} />
     
          <input type="password" value={data.password} placeholder='Password' className='w-full rounded-full py-1 px-3 bg-violet-200' name='password' onChange={(e)=> handleInput(e)}/>
            {errorSignIn && <small className='text-[10px] text-red-800'>Email hoặc mật khẩu không đúng</small>}
          <button className='w-full py-1 bg-green-400 mt-4 rounded-full text-white tracking-wide  first-letter:' onClick={handleSignIn}>LOGIN IN</button>
          <p className='text-center text-sm'>OR</p>
          <button className='rounded-full bg-white w-full py-1 text-black flex items-center justify-center mb-4' onClick={()=>GoogleLogin()}><FcGoogle className='text-3xl mr-2'/> SIGN IN WITH GOOGLE</button> 
          <button className='bg-blue-500 w-full py-1 rounded-full text-white flex items-center justify-center' onClick={LoginFacebook}><FaFacebook className='text-blue-900 mr-2 text-3xl'/> SIGN IN WITH FACEBOOK</button>
        </div>
          }
          {status === 'SignUp' && 
        <div className='mt-4'>
          <input type='email' value={data.email2} placeholder='User name' className='w-full rounded-full mb-3 py-1 px-3 bg-violet-200'  name="email2" onChange={(e)=> handleInput(e)} />
          <input type="password" value={data.email2} placeholder='Password' className='w-full rounded-full py-1 px-3 bg-violet-200'  name="password2" onChange={(e)=> handleInput(e)}/>
          {errorSignUp && <small className='text-[10px] text-red-800'>Email đã được sử dụng</small>}
          <button className='w-full py-1 bg-green-400 mt-4 rounded-full text-white tracking-wide  first-letter:' onClick={handleSignUp}>SIGN UP</button>
          <p className='text-center text-sm'>OR</p>
          <button className='rounded-full bg-white w-full py-1 text-black flex items-center justify-center mb-4' onClick={GoogleLogin}><FcGoogle className='text-3xl mr-2' /> SIGN UP WITH GOOGLE</button> 
          <button className='bg-blue-500 w-full py-1 rounded-full text-white flex items-center justify-center' onClick={LoginFacebook}><FaFacebook className='text-blue-900 mr-2 text-3xl'/> SIGN UP WITH FACEBOOK</button>
        </div>
          }
      </div>
   
  )
}

export default Login