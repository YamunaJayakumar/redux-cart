import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//action with asynchronous function call
 export const getAllProducts=createAsyncThunk('products/getAllProducts',async()=>{
   const result= await axios.get("https://dummyjson.com/products")
   sessionStorage.setItem("products",JSON.stringify(result.data.products))
   return result.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        loading:true,
        error:''
    },
    reducers:{
        //actions are synchronous
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.loading=false
            state.error=""
        })
        builder.addCase(getAllProducts.pending,(state,action)=>{
            state.allProducts=[]
            state.loading=true
            state.error=""
        })
        builder.addCase(getAllProducts.rejected,(state,action)=>{
            state.allProducts=[]
            state.loading=false
            state.error="something went wrong!!!API call failed"
        })
    }
    
})
export default productSlice.reducer