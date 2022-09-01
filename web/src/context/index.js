import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './product-slice';
import ProductCart from './product-cart';
import LoginSlice from "./login-slice";
import menuSlice from "./menu-slice";
const store=configureStore({
    reducer:{
        product:ProductSlice.reducer,
        cart:ProductCart.reducer,
        login:LoginSlice.reducer,
        menu:menuSlice.reducer,
    }
})
export default store;