import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import { userApi } from './Api/userApi'
import authReducer from "./Slices/userSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [userApi.reducerPath]: userApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
    devTools: true
})

setupListeners(store.dispatch)