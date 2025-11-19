import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice(
    {
        name:'wishlist',
        initialState:[],
        reducers:{
            //add to wishlist -add to wishlist btn clicked in view
            addToWishlist:(state,action)=>{
                state.push(action.payload)
            }
            //remove form wishlist 
        }
    }
)
export const{ addToWishlist }=wishlistSlice.actions
export default wishlistSlice.reducer