import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries=createAsyncThunk('country/getCountries', async()=>{
    const {data}=await axios.get('https://restcountries.com/v3.1/all');
    console.log(data);
    return data;    
})


const countrySlice=createSlice({
    name:'country',
    initialState:{
        countryData:null,
        isLoading:false,
        error:''
    },

   extraReducers:(builder)=>{
    builder 
    .addCase(getCountries.pending, (state)=>{
        state.isLoading=true
    })
    .addCase(getCountries.fulfilled, (state, action)=>{
        state.isLoading=false
        state.countryData=action.payload
    })
    .addCase(getCountries.rejected,(state, {payload})=>{
        state.isLoading=false
        state.error=payload
    })
   }
})
export default countrySlice.reducer