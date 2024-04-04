import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import countrySlice from "./slices/countrySlice";

const store=configureStore({
    reducer:{
        counter:counterSlice,
        counteries:countrySlice
    },
    
});

export default store