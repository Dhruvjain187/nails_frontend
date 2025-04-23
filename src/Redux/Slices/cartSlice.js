import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    totalCost: JSON.parse(localStorage.getItem("totalCost")) || 0,
    isUpdating: {}
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        findQuantity: (state, action) => {
            const quantity = state.cartItems.find((el) => el.id === action.payload.id)?.quantity
            // console.log("quantity=", quantity)
            if (quantity == undefined) {
                return 0
            }
            return quantity
        },

        addToCart: (state, action) => {
            console.log(action.payload)
            const quantity = cartSlice.caseReducers.findQuantity(state, action)

            if (quantity == 0) {
                state.cartItems.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    image: action.payload.images[0].url,
                    quantity: 1
                })
            }
            else {
                state.cartItems = state.cartItems.map((el) => (el.id === action.payload.id) ? { ...el, quantity: el.quantity + 1 } : el)
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            cartSlice.caseReducers.totalProductCost(state)
        },

        addToCartWithQty: (state, action) => {
            const quantity = cartSlice.caseReducers.findQuantity(state, action)
            if (quantity == 0) {
                state.cartItems.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    image: action.payload.images[0].url,
                    quantity: action.payload.quantity
                })
            }
            else {
                state.cartItems = state.cartItems.map((el) => (el.id === action.payload.id) ? { ...el, quantity: el.quantity + action.payload.quantity } : el)
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            cartSlice.caseReducers.totalProductCost(state)
        },

        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((el) => {
                return !(el.id === action.payload.id)
            })

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            cartSlice.caseReducers.totalProductCost(state)
        },

        totalProductCost: (state, action) => {
            state.totalCost = 0

            state.cartItems.map((el) => {
                state.totalCost += el.price * el.quantity
                // state.totalCost = state.toFixed(2)
            })

            if (state.totalCost) {
                localStorage.setItem("totalCost", JSON.stringify(state.totalCost))
            } else {
                localStorage.removeItem("totalCost")
            }
        },


        updateQuantity: (state, action) => {
            console.log("payload=", action.payload)
            const { id, quantity } = action.payload;

            const itemIndex = state.cartItems.findIndex(item => item.id === id);

            if (itemIndex >= 0 && quantity > 0) {
                state.cartItems[itemIndex].quantity = quantity
            }

            state.isUpdating[id] = false

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            cartSlice.caseReducers.totalProductCost(state)
        },

        setUpdatingStatus: (state, action) => {
            const { id, status } = action.payload;
            state.isUpdating[id] = status;
        }
    },
});

export const {
    findQuantity,
    addToCart,
    deleteFromCart,
    totalProductCost,
    updateQuantity,
    setUpdatingStatus,
    addToCartWithQty
} = cartSlice.actions;

export default cartSlice.reducer;