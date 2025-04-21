import { createSlice } from "@reduxjs/toolkit";

//helper function
// const calcTotalCost = (product) => {
//     // state.totalCost = 0

//     // state.cartItems.map((el) => {
//     //     state.totalCost += el.price * el.quantity
//     //     // state.totalCost = state.toFixed(2)
//     //     localStorage.setItem("totalCost", JSON.stringify(state.totalCost))
//     // })
//     return product.reduce((total, product) => total + product.price + product.quantity)
// }

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    totalCost: JSON.parse(localStorage.getItem("totalCost")) || 0,
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
        // const quantity = state.cartItems.find((el) => {
        //     // (el.id === action.payload)?.quantity
        //     if (el.id === action.payload) {
        //         return el.quantity
        //     }
        // })

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
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            }
            else {
                state.cartItems = state.cartItems.map((el) => (el.id === action.payload.id) ? { ...el, quantity: el.quantity + 1 } : el)
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            }
        },

        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((el) => {
                return !(el.id === action.payload.id)
            })

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            cartSlice.caseReducers.totalProductCost(state)
            // if (state.cartItems.length === 0) {
            //     state.totalCost = 0
            //     localStorage.setItem("totalCost", JSON.stringify(state.totalCost))
            // }
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


            // action.payload.forEach((update) => (
            //     state.cartItems = state.cartItems.map((el) =>
            //         el.id === update.id ? { ...el, quantity: Number(update.quantity) } : el)
            // ))

            state.cartItems = state.cartItems.map((el) => {
                const update = action.payload.find((up) => up.id === el.id);
                if (update) {
                    return { ...el, quantity: update.quantity }
                }
                return el;
            })

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            // localStorage.setItem("totalCost", JSON.stringify(state.totalCost))
            cartSlice.caseReducers.totalProductCost(state)
        }
    },
});

export const {
    findQuantity,
    addToCart,
    deleteFromCart,
    totalProductCost,
    updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;