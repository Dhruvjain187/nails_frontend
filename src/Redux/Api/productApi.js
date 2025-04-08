import { apiSlice } from "./apiSlice";
import { PRODUCT_URL } from "../../constants";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllProduct: builder.query({
            // query: () => `${PRODUCT_URL}`
            query: ({ pageSize, page, category = "", brand = "" }) => {
                const params = new URLSearchParams();

                params.append('page', page);
                params.append('category', category);
                params.append('brand', brand);
                params.append('pageSize', pageSize);

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