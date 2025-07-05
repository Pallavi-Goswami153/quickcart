import Productreducers from "./ProductSlice"
import Cartreducers from "./CartSlice"
import { configureStore } from "@reduxjs/toolkit"
export default configureStore({
    reducer:{
        product:Productreducers,
        cart:Cartreducers
    }
})