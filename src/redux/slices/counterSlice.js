import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        
        counterData:11
    },
    reducers:{ //actions
        plus:(state)=>{
            state.counterData += 1;
        },
        minus:(state)=>{
            state.counterData -= 1;
        },
    }, //sync action
    // extraReducers:""
})
export default counterSlice.reducer
export const{plus, minus} = counterSlice.actions;