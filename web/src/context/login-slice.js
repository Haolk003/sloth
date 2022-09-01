import { createSlice } from "@reduxjs/toolkit";
const LoginSlice=createSlice({
    name:"login",
    initialState:{user:null,isLoggin:false},
    reducers:{
        login(state,action){
            state.user=action.payload;
        },
        OpenLogin(state){
            state.isLoggin=true;
        }
    }
})
export const LoginActions=LoginSlice.actions;
export default LoginSlice;  