import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductAction } from '../context/product-slice';
import {BsCheck} from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';
import { menuActions } from '../context/menu-slice';
const Filter = () => {
  const category=useSelector((state)=>state.product.category);
  const company=useSelector((state)=> state.product.company);
  const color=useSelector((state)=> state.product.color);
  const freeShip=useSelector((state)=> state.product.freeShip);
  
  const [pricechange,setPricechange]=useState(100);
  const [search,setSearch]=useState("");
  const dispatch=useDispatch();
  const CategoryFil=(e)=>{
      dispatch(ProductAction.Category(e));
  }
  const CompanyFil=(e)=>{
   dispatch(ProductAction.Company(e));
  }
  const ColorFil=(e)=>{
    dispatch(ProductAction.SetColor(e));
  }
  useEffect(()=>{
    dispatch(ProductAction.setPrice(pricechange));
  },[pricechange]);
  const ClearFilter=()=>{
    dispatch(ProductAction.Category(""));
    dispatch(ProductAction.Company(""));
    dispatch(ProductAction.Category(""));
    setPricechange(100);
    dispatch(ProductAction.clearShip());
  }
useEffect(()=>{
dispatch(ProductAction.SearchProduct(search));
},[search])
  return (
    <div className=''>
        <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-[200px] px-2 py-1 rounded-md mb-3 bg-gray-300 text-gray-700 placeholder:text-sm placeholder:tracking-wide'/>
        <h3 className='font-semibold mb-3'>Category</h3>
        <ul className="text-gray-500 font-[300]  flex flex-col gap-5">
            <li className={`${category === "" ? "underline" : ""} cursor-pointer`}  onClick={()=>CategoryFil('')} >All</li>
            <li className={`${category === "Office" ? "underline" : ""} cursor-pointer`} onClick={()=>CategoryFil('Office')}>Office</li>
            <li className={`${category === "Living" ? "underline" : ""} cursor-pointer`}  onClick={()=>CategoryFil('Living')}>Living Room</li>
            <li className={`${category === "Kitchen" ? "underline" : ""} cursor-pointer`}  onClick={()=>CategoryFil('Kitchen')}>Kitchen</li>
            <li className={`${category === "BedRoom" ? "underline" : ""} cursor-pointer`} onClick={()=>CategoryFil('BedRoom')}>Bedroom</li>
            <li className={`${category === "Dining" ? "underline" : ""} cursor-pointer`}  onClick={()=>CategoryFil('Dining')}>Dining</li>
            <li className={`${category === "Kids" ? "underline" : ""} cursor-pointer`}  onClick={()=>CategoryFil('Kids')}>Kids</li>
        </ul>
        <h3 className='my-3 font-semibold '>Company</h3>
        <select onChange={(e)=>CompanyFil(e.target.value)} value={company}>
            <option value="">all</option>
            <option value="marcos">marcos</option>
            <option value="liddy">liddy</option>
            <option value="ikea">ikea</option>
            <option value="caressa">caressa</option>
        </select>
        <h3 className='my-3 font-semibold'>Colors</h3>
        <ul className='flex items-center gap-2'>
            <li onClick={()=>ColorFil('')} className={`${color === "" ? "underline text-gray-600" :"text-gray-400"}`}>All</li>
            <li value="red" className='w-4 h-4 rounded-full bg-red-400 cursor-pointer text-white' onClick={()=>ColorFil('red')}>
             {color === "red" && <BsCheck />}
            </li>
            <li value="green" className='w-4 h-4 rounded-full bg-green-400 cursor-pointer text-white' onClick={()=>ColorFil('green')}> {color === "green" && <BsCheck />}</li>
            <li value="blue" className='w-4 h-4 rounded-full bg-[#006699] cursor-pointer text-white' onClick={()=>ColorFil('blue')}> {color === "blue" && <BsCheck />}</li>
            <li value="blue" className='w-4 h-4 rounded-full bg-[#000] cursor-pointer text-white' onClick={()=>ColorFil('black')}> {color === "black" && <BsCheck />}</li>
            <li value="yellow" className='w-4 h-4 rounded-full bg-yellow-400 cursor-pointer text-white' onClick={()=>ColorFil('yellow')}> {color === "yellow" && <BsCheck />}</li>
        </ul>
        <h3 className='my-3 font-semibold'>Price</h3>
        <div>${`${(pricechange*31).toFixed(2)}`}</div>
        <input type="range" min="0" max="100" value={pricechange} onChange={(e)=> setPricechange(e.target.value)}  />
        <div className='flex items-center gap-6'>
          <p>Free Shipping</p>
          <input type="checkbox" name="FreeShipping" className='cursor-pointer' onChange={()=> dispatch(ProductAction.toggleShip())} checked={`${freeShip ? "checked":""}`}/>
        </div>
        <button className=' px-2 tracking-wide text-white text-base bg-red-700 rounded-md my-3' onClick={()=>ClearFilter()}>Clear Filter</button>
        <button className='w-full py-2 lg:hidden block bg-blue-500 rounded-md mt-3 text-white' title='Filter' onClick={()=> dispatch(menuActions.CloseFilter())}>OK</button>
    </div>
  )
}

export default Filter