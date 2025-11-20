import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //addto cart
        addToCart:(state,action)=>{
            const exisitingProduct = state.find(item=>item.id==action.payload.id)
            if(exisitingProduct){
                exisitingProduct.quantity++  
                exisitingProduct.totalPrice=exisitingProduct.quantity *exisitingProduct.price
                const remainingProducts=state.filter(item=>item.id !=exisitingProduct.id)
                state=[...remainingProducts,exisitingProduct]

            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }

        }
    }
})
export const{addToCart}=cartSlice.actions
export default cartSlice.reducer