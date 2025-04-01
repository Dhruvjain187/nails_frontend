// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const userApi = createApi({
//     reducerPath: "userApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:3000/api/v1/user",
//         credentials: "include",
//     }),

//     endpoints: (builder) => ({
//         registerUser: builder.mutation({
//             query: (data) => ({
//                 url: "/signup",
//                 method: "POST",
//                 body: data,
//             }),
//         }),
//         loginUser: builder.mutation({
//             query: (data) => ({
//                 url: "/login",
//                 method: "POST",
//                 body: data,
//             }),
//         }),
//         logoutUser: builder.mutation({
//             query: () => ({
//                 url: "/logout",
//                 method: "POST",
//             }),
//         }),
//     }),
// });

// export const {
//     useLoginUserMutation,
//     useLogoutUserMutation,
//     useRegisterUserMutation,
// } = userApi;


import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../../constants";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/signup`,
                method: "POST",
                body: data,
            }),
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: "POST",
                body: data,
            }),
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: "POST",
            }),
        }),
    })
})


export const {
    useLoginUserMutation,
    useLogoutUserMutation,
    useRegisterUserMutation,
} = userApiSlice;
