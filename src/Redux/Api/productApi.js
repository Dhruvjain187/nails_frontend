import { apiSlice } from "./apiSlice";
import { PRODUCT_URL } from "../../constants";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllProduct: builder.query({
            // query: () => `${PRODUCT_URL}`
            query: ({ page = 1 }) => {
                const params = new URLSearchParams();

                params.append('page', page);

                return {
                    url: `${PRODUCT_URL}?${params.toString()}`,
                    method: 'GET',
                };
            }

        }),
    })
})


export const {
    useFetchAllProductQuery
    // useLoginUserMutation,
    // useLogoutUserMutation,
    // useRegisterUserMutation,
} = productApiSlice;

// query: ({ page = 1 }) =>
// {
//     const params = new URLSearchParams();

//     params.append('page', page);

//     return {
//         url: `${PRODUCT_URL}?${params.toString()}`,
//         method: 'GET',
//     };
// }