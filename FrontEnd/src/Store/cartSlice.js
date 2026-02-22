import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            // Use both id and size to identify unique items
            const existingItem = state.cartItems.find(
                (cartItem) =>
                    cartItem.id === item.id &&
                    cartItem.selectedVariant.size === item.selectedVariant.size,
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({
                    ...item,
                    quantity: 1,
                });
            }
        },

        increaseQty: (state, action) => {
            const { id, size } = action.payload; // now expecting an object
            const item = state.cartItems.find(
                (i) => i.id === id && i.selectedVariant.size === size,
            );
            if (item) item.quantity += 1;
        },

        decreaseQty: (state, action) => {
            const { id, size } = action.payload; // now expecting an object
            const item = state.cartItems.find(
                (i) => i.id === id && i.selectedVariant.size === size,
            );
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        removeFromCart: (state, action) => {
            const { id, size } = action.payload;
            state.cartItems = state.cartItems.filter(
                (i) => !(i.id === id && i.selectedVariant.size === size),
            );
        },

        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
