import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import navigateReducer from "./navigateSlice.js"

const store = configureStore({
    reducer:{
      user :  userReducer,
      navigator  : navigateReducer
    }
    
});


export default store;
