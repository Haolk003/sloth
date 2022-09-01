import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import data from '../context/data';
import {IoIosStar} from 'react-icons/io';
import {IoIosStarOutline} from 'react-icons/io';
import {IoIosStarHalf} from 'react-icons/io';
import { useState } from 'react';
import {BsCheck} from 'react-icons/bs';
import {AiOutlineMinus} from 'react-icons/ai';
import {IoAddOutline} from 'react-icons/io5';
import {Link} from 'react-router-dom';  
import { cartActions } from '../context/product-cart';
const SingleProduct = () => {
    const {id}=useParams();
    const [colorSelect,setColorSelect]=useState("");
    const [count,setCount]=useState(1);
    const [loading,setLoading]=useState(false);
    const [image,setImage]=useState('');
    const itemProduct=data.find((item)=> item.id==id);
    const dataColor=itemProduct.colors.split(' ');
    const dispatch=useDispatch();
    useEffect(()=>{
      setColorSelect(dataColor[0]);
      setImage(itemProduct.image);
    },[itemProduct]);
    const AddCount=()=>{
      setCount(count +1);
    }
    const MinusCount=()=>{
      setCount(()=>{
        if(count<=1){
          return count;
        }
        else{
          return count-1;
        }
      })
    }
    useEffect(()=>{
      if(itemProduct){
        setLoading(true);
      }
    },[itemProduct]);
    const AddCart=()=>{
      dispatch(cartActions.AddCart({
        id:itemProduct.id,
        image:itemProduct.image,
        quanlity:count,
        color:colorSelect,
        price:itemProduct.price,
        name:itemProduct.name,
      }))
    }
  return (
    <div className=' w-[100%] pt-[100px] pb-[150px]'>
        <div className='w-full bg-[#e2c7c7] py-[50px] opacity-80 '>
    <h1 className='text-[#331200] text-3xl font-bold ml-[200px]'><span className='text-[#993300]'>Home / Products</span> / {itemProduct.name}  </h1>
    </div>
    {!loading && <div role="status" className='flex items-center justify-center'>
    <svg aria-hidden="true" className="mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>}
   {loading && <div className='w-[80%] mx-auto '>
        <Link to="/product"><button className='tracking-wide text-lg px-2 py-1  text-white my-5 rounded-md bg-[#7f2e2e]'>BACK TO PRODUCTS</button></Link>
        <div className='lg:flex-row flex flex-col items-center gap-5'>
          <div className='lg:w-[40%] w-full flex flex-col'>
          <img src={image} alt={image} className="w-full lg:h-[500px] h-auto object-cover rounded-md" />
          <div className='flex items-center justify-between mt-4'>
            <img src={itemProduct.image} alt={itemProduct.image} className={`w-[20%] lg:h-[60px] h-auto rounded-md object-cover ${image===itemProduct.image && 'border-4 border-red-400'} `} onClick={(e)=>setImage(e.target.src)}  />
            <img onClick={(e)=>setImage(e.target.src)} className={`w-[18%] lg:h-[60px] h-auto rounded-md object-cover ${image==="https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg" && 'border-4 border-red-400'} `} src="https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg" alt=""  />
            <img onClick={(e)=>setImage(e.target.src)} className={`w-[18%] lg:h-[60px] h-auto rounded-md object-cover ${image==="https://dl.airtable.com/.attachments/a73777f8a2cbf4820ccaa6aa4349db01/c541de4b/z-extra-2.jpeg" && 'border-4 border-red-400'} `} src="https://dl.airtable.com/.attachments/a73777f8a2cbf4820ccaa6aa4349db01/c541de4b/z-extra-2.jpeg" alt="" />
            <img onClick={(e)=>setImage(e.target.src)} className={`w-[18%] lg:h-[60px] h-auto rounded-md object-cover ${image==="https://dl.airtable.com/.attachments/7a50daf83875879b373d91ebb9bb6012/c1695f7e/z-extra-3.jpeg" && 'border-4 border-red-400'} `} src="https://dl.airtable.com/.attachments/7a50daf83875879b373d91ebb9bb6012/c1695f7e/z-extra-3.jpeg" alt="" />
            <img onClick={(e)=>setImage(e.target.src)} className={`w-[18%] lg:h-[60px] h-auto rounded-md object-cover ${image==="https://dl.airtable.com/.attachments/5592998dcaee77b12c50bda63dd94d06/6ad61540/z-extra-4.jpeg"  && 'border-4 border-red-400'} `} src="https://dl.airtable.com/.attachments/5592998dcaee77b12c50bda63dd94d06/6ad61540/z-extra-4.jpeg" alt="" />
          </div>
          </div>
          <div className='lg:w-[60%] w-full'>
            <h2 className='text-4xl font-semibold text-gray-800 mb-3'>{itemProduct.name}</h2>
            <div className='flex items-center text-yellow-400 text-xl mb-3'>
              <IoIosStar className='text-yellow-400'/>
              <IoIosStar  className='text-yellow-400'/>
              <IoIosStarHalf className='text-yellow-400'/>
              <IoIosStarOutline/>
              <IoIosStarOutline/>
            </div>
              <p className='text-[#c26565] text-lg font-semibold mb-3'>${itemProduct.price}</p>
              <p className='leading-10'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
              <div className='font-semibold mb-4'>Available : <span className='font-normal text-sm ml-3'>In Stock</span></div>
              <div className='font-semibold mb-4'>SKU : < span className='font-normal text-sm ml-3'>{itemProduct.id}</span></div>
              <div className='font-semibold mb-4 border-b-[1px] border-gray-400 pb-4'>Brand :<span className='font-normal text-sm ml-3 '>{itemProduct.company}</span></div>
            <div className='flex items-center'>
              <h2 className='font-semibold mr-4'>Colors :</h2>
              <div className='flex items-center'>
              {dataColor.map((item,index)=>{
                return(
                  <span key={index} onClick={()=>setColorSelect(item)} className={`w-6 h-6 mr-3 rounded-full  text-white cursor-pointer flex items-center justify-center text-lg  ${colorSelect === item ? 'opacity-100' : 'opacity-60'}`} style={{background:item}}>{colorSelect===item && <BsCheck />  }</span>
                )
              })}
              </div>
            
            </div> 
             <div className='flex items-center gap-5 text-3xl my-5 '>
                <AiOutlineMinus onClick={()=>MinusCount()} className="cursor-pointer" />
                <span className='font-semibold text-4xl'>{count}</span>
                <IoAddOutline onClick={()=> AddCount()} className="cursor-pointer"/>
              </div>
                <Link to="/cart"className='bg-[#682b2b] tracking-wide text-lg px-2 py-1 rounded-md text-white ' onClick={()=>{AddCart()}}> ADD TO CART
                </Link>
          </div>
        </div>
    </div>
}
    </div>
  )
}

export default SingleProduct