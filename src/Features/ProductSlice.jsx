import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

 export const fetchproducts=createAsyncThunk('products/fetchproducts',async()=>{
 const response=await axios.get("https://fakestoreapi.com/products")
 const data= await response.data;
 console.log(data)
 return data
 })


const initialState={loading:false,
                    productlist:[3],
                    error:""}

const ProductSlice=createSlice({
    name:"products",
    initialState,
    extraReducers:(builder)=>
        {
             builder.addCase(fetchproducts.pending,(state)=>{state.loading=true})
        .addCase(fetchproducts.fulfilled,(state,action)=>{state.loading=false,state.productlist=action.payload ,state.error="" })
        .addCase(fetchproducts.rejected,(state,action)=>{state.error=action.error.message})
        }
         
})

export default ProductSlice.reducer
