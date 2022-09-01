import {createSlice} from '@reduxjs/toolkit';
const ProductSlice=createSlice({
    name:"Product",
    initialState:{category:"",
    company:"",
    color:"",pricebar:100,
    freeShip:false,
    search:"",
    productData:[],
    Productype:"col",
    SortProduct:"PriceAsc"
    },
    reducers:{
            Category(state,action){
                state.category=action.payload;
            },
            Company(state,action){
                state.company=action.payload;
            }
            ,SetColor(state,action){
                state.color=action.payload;
            },
            setPrice(state,action){
                state.pricebar=action.payload;
            },
            toggleShip(state){
                state.freeShip=!state.freeShip;
            },
            clearShip(state){
                state.freeShip=false;
            },
            SearchProduct(state,action){
                state.search=action.payload;
            },
            ChangeProductData(state,action){
                state.productData=action.payload;
            },
            ChangeTypeProduct(state,action){
                state.Productype=action.payload;   
            },
            SortProductFun(state,action){
                state.SortProduct=action.payload;
            },
           
    }
});
export const ProductAction=ProductSlice.actions;
export default ProductSlice;