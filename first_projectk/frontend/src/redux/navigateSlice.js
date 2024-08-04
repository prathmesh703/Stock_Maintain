import { createSlice } from "@reduxjs/toolkit"
const navigateSlice = createSlice({
    name :"navigate",
    initialState:{
        isHome :true,
        isProfit :false,
        isStock : false
    },
    reducers:{
        setHome:(state,action)=>{
            state.isHome=action.payload;
        },

        setStock:(state,action)=>{
            state.isStock=action.payload
        },
        setProfit:(state,action)=>{
            state.isProfit=action.payload
        }
    }
})
export const {setHome,setProfit,setStock} = navigateSlice.actions;
export default navigateSlice.reducer
