import { createSlice } from "@reduxjs/toolkit";
const menuSlice=createSlice({
    name:'menu',
    initialState:{showMenu:false,showFilter:false}
    ,reducers:{
        OpenMenu(state){
            state.showMenu=true;
        },
        closeMenu(state){
            state.showMenu=false;
        },
        OpenFilter(state){
            state.showFilter=true;
        },
        CloseFilter(state){
            state.showFilter=false;
        }
    }
})
export const menuActions=menuSlice.actions;
export default menuSlice;