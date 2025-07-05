import { createSlice } from "@reduxjs/toolkit";
export const ProductSlice=createSlice({
    name:"Products",
    initialState:{
        data:[]
    },
    reducers:{
        addData:(state,action)=>{
            state.data=[...state.data,...action.payload]

        }
    }
})
export const {addData}=ProductSlice.actions;
export default ProductSlice.reducer;