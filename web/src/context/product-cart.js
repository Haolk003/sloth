import { createSlice } from "@reduxjs/toolkit";

const ProductCart=createSlice({
    name:'cart',
    initialState:{
        Cartdata:[],
        totalsPrice:0,
        quanlityCart:0,
    },
    reducers:{
        AddCart(state,action){
            const newItem=action.payload;
            const existingItem=state.Cartdata.find((item)=> item.id=== newItem.id);
            if(existingItem){
                existingItem.quanlity+=existingItem.quanlity;
                existingItem.total+=existingItem.price;
               
            }
            else{
                state.Cartdata.push({
                    id:newItem.id,
                    quanlity:newItem.quanlity,
                    name:newItem.name,
                    total:newItem.price,
                    color:newItem.color,
                    price:newItem.price,
                    image:newItem.image,
                    request:false,
                })
               
            }
        
        },
        MinusQuanlity(state,action){
            const id=action.payload;
            const minus=state.Cartdata.find((item)=>item.id===id);
            if(minus.quanlity>1){
                minus.quanlity--;
              
            }
        },
        AddQuanlity(state,action){
            const id=action.payload;
            const add=state.Cartdata.find((item)=> item.id===id);
            add.quanlity++;
            add.total+=add.price;
           
        },
        RemoveCart(state,action){
             const id=action.payload; 
            state.Cartdata=state.Cartdata.filter((item)=> item.id!==id);
            
        },
        ReplaceData(state,action){
            state.Cartdata=action.payload;
        },
        ReplaceQuanlity(state,action){
             state.quanlityCart=action.payload;
        },
        RemoveAll(state){
            state.Cartdata=[];
          
          
        },
        TotalPrice(state,action){
            state.totalsPrice=action.payload;
        },
        ToggleRequest(state,action){
            const id=action.payload;
            const newItem=state.Cartdata.find((item)=> item.id ===id);
            newItem.request=!newItem.request;
        },
        CheckoutAccess(state){
            
            state.Cartdata=state.Cartdata.filter((item)=> item.request === false);
        }
       
    }
})
export const cartActions=ProductCart.actions;
export default ProductCart;