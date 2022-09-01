import React from 'react'
import { Filter, Products } from '../component';
import {TbColumns} from 'react-icons/tb';
import {MdTableRows} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ProductAction } from '../context/product-slice';
import {MdFilterList} from 'react-icons/md';
import { menuActions } from '../context/menu-slice';
const Product = () => {
  const dispatch=useDispatch();
  const dataProduct=useSelector((state)=> state.product.productData);
  const Productype=useSelector((state)=> state.product.Productype);
  const showFilter=useSelector((state)=> state.menu.showFilter);
  return (
    <div className='pt-[100px] pb-[200px] relative overflow-auto'>
      <div className='w-full bg-[#e2c7c7] py-[50px] opacity-80'>
    <h1 className='text-[#331200] text-3xl font-semibold ml-[200px]'><span className='text-[#993300]'>Home</span> / Product</h1>
    </div> 
  { showFilter &&  <div className='fixed left-0 top-0 w-full h-full lg:hidden block z-50 bg-[rgba(0,0,0,0.7)]  '>
      <div className='px-5 py-5 bg-white absolute left-0 top-0 h-screen'>
        <Filter />
        </div>
      </div>
}
    <div className='w-[80%] mx-auto mt-[50px] gap-5 lg:flex relative'>
      <div className='lg:block hidden'>
      <Filter />
      </div>
     
      <div>
        <div className='flex items-center gap-4 mb-4 justify-between'>
          <div className='flex items-center gap-3'>
          <MdFilterList  className=' lg:hidden block text-3xl cursor-pointer  ' onClick={()=> dispatch(menuActions.OpenFilter())}/>
          <TbColumns className={`text-3xl p-1 border-[1px] rounded-sm ${Productype === "col" && "bg-black text-white"} border-black cursor-pointer`} onClick={()=> dispatch(ProductAction.ChangeTypeProduct('col'))}/>
          <MdTableRows className={`text-3xl p-1 border-[1px] rounded-sm border-black cursor-pointer ${Productype === "row" && 'bg-black text-white'}`} onClick={()=> dispatch(ProductAction.ChangeTypeProduct('row'))}/>
          </div>
          <div>{dataProduct.length} Products Found</div>
          <div className='w-[40%] h-[1px] bg-gray-400'></div>
          <div className='flex items-center'>Sort By
         <select className='bg-transparent outline-none ml-3' onChange={(e)=> dispatch(ProductAction.SortProductFun(e.target.value))}>
            <option selected value="PriceAsc">Price (Lowest)</option>
            <option value="PriceDec">Price (Highest)</option>
            <option value="NameAsc">Name (A-Z)</option>
            <option value="NameDec">Name (Z-A)</option>
         </select>
         </div>
        </div>
      <Products />
      </div>
    </div>
    </div>
  )
}

export default Product