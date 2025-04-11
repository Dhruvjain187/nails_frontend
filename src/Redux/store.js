import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
// import { userApi } from './Api/userApi'
import authReducer from "./Slices/userSlice"
import cartReducer from "./Slices/cartSlice"
import { apiSlice } from './Api/apiSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

setupListeners(store.dispatch)