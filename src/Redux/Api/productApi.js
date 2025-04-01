import { apiSlice } from "./apiSlice";
import { PRODUCT_URL } from "../../constants";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllProduct: builder.query({
            query: () => `${PRODUCT_URL}`
        }),
    })
})


export const {
    useFetchAllProductQuery
    // useLoginUserMutation,
    // useLogoutUserMutation,
    // useRegisterUserMutation,
} = productApiSlice;
