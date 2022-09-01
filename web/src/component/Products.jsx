import React from 'react'
import data from '../context/data';
import Cart from './Cart';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { useState } from 'react';
import { ProductAction } from '../context/product-slice';
import CartCol from './CartCol';
const Products = () => {
  const dispatch=useDispatch();
  const category=useSelector((state)=>state.product.category);
  const company=useSelector((state)=> state.product.company);
  const color=useSelector((state)=> state.product.color);
  const price=useSelector((state)=> state.product.pricebar);
  const freeShip=useSelector((state)=> state.product.freeShip);
  const search=useSelector((state)=> state.product.search);
  const Productype=useSelector((state)=> state.product.Productype);
  const SortProduct=useSelector((state)=> state.product.SortProduct);
  const [dataProduct,setDataProduct]=useState(data);
  const [datanew,setDatanew]=useState([]);
  useEffect(()=>{
    if(search){

    if(category && !company && color && freeShip){
       const data2=data.filter(item=> item.category===category).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.freeShip === true).filter((item)=> item.name.toLowerCase().includes(search));
  setDataProduct(data2);
    }
    else if(category && !color && !freeShip &&!company){
      const data2=data.filter(item => item.category === category ).filter((item)=> item.name.toLowerCase().includes(search));
    setDataProduct(data2);
    }
    else if(!color && company && category && freeShip){
      const data2=data.filter(item=> item.company===company).filter(item => item.category === category).filter((item)=> item.price<(price*31).filter((item)=> item.freeShip === true)).filter((item)=> item.name.toLowerCase().includes(search));
      setDataProduct(data2);
    }
    else if(!category && !color && !freeShip &&company){
      const data2=data.filter(item => item.company === company ).filter((item)=> item.name.toLowerCase().includes(search));
    setDataProduct(data2);
    }
    else if(!category && company && color && freeShip){
      const data2=data.filter(item=> item.company===company).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.freeShip === true).filter((item)=> item.name.toLowerCase().includes(search));
    setDataProduct(data2);
    }
    else if(category && company && color && freeShip){
      const data2=data.filter(item=> item.company===company).filter(item => item.category === category).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.freeShip === true).filter((item)=> item.name.toLowerCase().includes(search));
      setDataProduct(data2);
    }
    else if(!category && !company && color && freeShip){
      const data2=data.filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.freeShip === true).filter((item)=> item.name.toLowerCase().includes(search));
      setDataProduct(data2);
    }
    else if(category && !company && color && !freeShip){
      const data2=data.filter(item=> item.category===category).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.name.toLowerCase().includes(search));
 setDataProduct(data2);
   }
   else if(!color && company && category && !freeShip){
     const data2=data.filter(item=> item.company===company).filter(item => item.category === category).filter((item)=> item.price<(price*31));
     setDataProduct(data2);
   }
   else if(!category && company && color && !freeShip){
     const data2=data.filter(item=> item.company===company).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.name.toLowerCase().includes(search));
   setDataProduct(data2);
   }
   else if(category && company && color && !freeShip){
     const data2=data.filter(item=> item.company===company).filter(item => item.category === category).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.name.toLowerCase().includes(search));
     setDataProduct(data2);
   }
   else if(!category && !company && color && !freeShip){
     const data2=data.filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.name.toLowerCase().includes(search));
     setDataProduct(data2);
   }
   else if(!category && !company && !color && freeShip){
    const data2=data.filter((item)=> item.price<(price*31)).filter((item)=> item.freeShip === true).filter((item)=> item.name.toLowerCase().includes(search));
     setDataProduct(data2);
   }
    else{
      const data2=data.filter((item)=> item.price<=(price*31)).filter((item)=> item.name.toLowerCase().includes(search))
     setDataProduct(data2);
    }
 }
 else{
  if(category && !company && color && freeShip){
    const data2=data.filter(item=> item.category===category).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.freeShip === true);
setDataProduct(data2);
 }
 else if(category && !color && !freeShip &&!company){
  const data2=data.filter(item => item.category === category );
setDataProduct(data2);
}
else if(!category && !color && !freeShip &&company){
  const data2=data.filter(item => item.company === company );
setDataProduct(data2);
}
 else if(!color && company && category && freeShip){
   const data2=data.filter(item=> item.company===company).filter(item => item.category === category).filter((item)=> item.price<(price*31).filter((item)=> item.freeShip === true));
   setDataProduct(data2);
 }
 else if(!category && company && color && freeShip){
   const data2=data.filter(item=> item.company===company).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.freeShip === true);
 setDataProduct(data2);
 }
 else if(category && company && color && freeShip){
   const data2=data.filter(item=> item.company===company).filter(item => item.category === category).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.freeShip === true);
   setDataProduct(data2);
 }
 else if(!category && !company && color && freeShip){
   const data2=data.filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31)).filter((item)=> item.freeShip === true);
   setDataProduct(data2);
 }
 else if(category && !company && color && !freeShip){
   const data2=data.filter(item=> item.category===category).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31));
setDataProduct(data2);
}
else if(!color && company && category && !freeShip){
  const data2=data.filter(item=> item.company===company).filter(item => item.category === category).filter((item)=> item.price<(price*31));
  setDataProduct(data2);
}
else if(!category && company && color && !freeShip){
  const data2=data.filter(item=> item.company===company).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31));
setDataProduct(data2);
}
else if(category && company && color && !freeShip){
  const data2=data.filter(item=> item.company===company).filter(item => item.category === category).filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31));
  setDataProduct(data2);
}
else if(!category && !company && color && !freeShip){
  const data2=data.filter((item)=>  item.colors.split(" ").includes(color)).filter((item)=> item.price<(price*31));
  setDataProduct(data2);
}
else if(!category && !company && !color && freeShip){
 const data2=data.filter((item)=> item.price<(price*31)).filter((item)=> item.freeShip === true);
  setDataProduct(data2);
}
 else{
   const data2=data.filter((item)=> item.price<=(price*31))
  setDataProduct(data2);
 }
 }
  },[category,company,color,price,freeShip,search]);
  
 useEffect(()=>{
dispatch(ProductAction.ChangeProductData(dataProduct));
  
 },[dataProduct]);
 useEffect(()=>{
const dataold=[...dataProduct];
  if(SortProduct === "PriceAsc"){
  dataold.sort((a, b)=> a.price - b.price );
  setDatanew(dataold);
  }
  else if(SortProduct === "PriceDec"){
    dataold.sort((a, b)=> b.price - a.price );
    setDatanew(dataold);
  }
   else if(SortProduct === "NameAsc"){
    dataold.sort((a,b)=> {
      if(a.name.toLowerCase()<b.name.toLowerCase()){
        return -1;
      }
      else if(a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
      }
      return 0;
    })
    setDatanew(dataold)
   }
   else if(SortProduct === "NameDec"){
    dataold.sort((a,b)=> {
      if(a.name.toLowerCase()<b.name.toLowerCase()){
        return 1;
      }
      else if(a.name.toLowerCase() > b.name.toLowerCase()){
        return -1;
      }
      return 0;
    })
    setDatanew(dataold)
   }

 },[dataProduct,SortProduct])

  return (
    <div className={`${Productype === "col" ? 'flex flex-wrap gap-5' : 'flex flex-col gap-5'}`}>
        {Productype === "col" && dataProduct &&  datanew.map((item)=>{
            return(
                <Cart key={item.id} img={item.image} title={item.name} price={item.price} id={item.id} width="w-300" />
            )
        })}
        {Productype === "row" && dataProduct && datanew.map((item)=>{
            return(
                <CartCol key={item.id} img={item.image} title={item.name} price={item.price} info={item.info} id={item.id} />
            )
        })} 
        {!dataProduct && <div className='mt-[100px] mr-[100px] font-semibold text-xl'>Sorry, no products matched your search.</div>}
    </div>
  )
}

export default Products