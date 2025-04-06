import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "",
    brand: "",
    priceRange: [],
    page: 1,
    limit: 24
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        // setCredentials: (state, action) => {
        //     state.userData = action.payload;
        //     localStorage.setItem("userData", JSON.stringify(action.payload));
        // },
        // logOut: (state) => {
        //     state.userData = null;
        //     localStorage.removeItem("userData");
        // },
        changePage: (state, action) => {
            // console.log(action.payload)
            // console.log(state.page)
            state.page = action.payload
        },
        resetFilter: () => initialState
    },
});

export const { resetFilter, changePage } = filterSlice.actions;

export default filterSlice.reducer;