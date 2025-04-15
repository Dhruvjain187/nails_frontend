import { apiSlice } from "./apiSlice";
import { PRODUCT_URL } from "../../constants";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllProduct: builder.query({
            // query: () => `${PRODUCT_URL}`
            query: ({ pageSize, page, category = "", brand = "", minPrice = 0, maxPrice = 4000 }) => {
                const params = new URLSearchParams();

                params.append('page', page);
                params.append('category', category);
                params.append('brand', brand);
                params.append('pageSize', pageSize);
                params.append('minPrice', minPrice);
                params.append('maxPrice', maxPrice);

                return {
                    url: `${PRODUCT_URL}?${params.toString()}`,
                    method: 'GET',
                };
            }

        }),

        fetchProductById: builder.query({
            query: ({ id }) => {
                return {
                    url: `${PRODUCT_URL}/${id}`,
                    method: 'GET'
                }
            }
        })
    })
})


export const {
    useFetchAllProductQuery,
    useFetchProductByIdQuery,
} = productApiSlice;