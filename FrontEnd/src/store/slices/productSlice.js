import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    items: [],
    isError: false,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchAllProducts: (state, action) => {
            state.loading = false;
            state.items = action.payload.result;
            state.isError = action.payload.isError
        },

    }
})

export const { fetchAllProducts } = productSlice.actions
export default productSlice.reducer;