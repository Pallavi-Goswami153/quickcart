import { createSlice } from "@reduxjs/toolkit";
export const CartSlice=createSlice({
   name:"cart",
   initialState:{
        cartList:[], //contain id which are in cart
        cartItems:[] //contain items which are in cart
   },
   reducers:{
     addtoCartList:(state,action)=>{
      state.cartList=[...state.cartList,action.payload]
      console.log(state.cartList)
     },
     removeFromCartList:(state,action)=>{
       state.cartList=state.cartList.filter(id=>id!==action.payload)
       console.log("Product ids:",state.cartList)
      //  console.log("removed")
     },
     addtoCartItem:(state,action)=>{
       state.cartItems=[...state.cartItems,action.payload]
       console.log(state.cartItems)
     },
     removeFromCartItem:(state,action)=>{
        console.log("Id to be remove",action.payload.id)
        state.cartItems=state.cartItems.filter(item=>item.id!==action.payload.id)
        console.log("After removal")
        console.log("Data",state.cartItems)
     }

   }
})
export const {addtoCartItem,addtoCartList,removeFromCartItem,removeFromCartList}=CartSlice.actions
export default CartSlice.reducer