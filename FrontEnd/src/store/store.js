import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import userCartSlice from "./slices/userCartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userCart: userCartSlice,
  },
});
