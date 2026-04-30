import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import userCartSlice from "./slices/userCartSlice";
import productSlice from "./slices/productSlice"
import dealSlice from "./slices/dealSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    userCart: userCartSlice,
    products: productSlice,
    deals: dealSlice
  },
});
