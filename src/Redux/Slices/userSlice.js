import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData"))
        : false,
};

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem("userData", JSON.stringify(action.payload));
        },
        logOut: (state) => {
            state.userData = null;
            localStorage.removeItem("userData");
        },
    },
});

export const { setCredentials, logOut } = userSlice.actions;

export default userSlice.reducer;