import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "./menuSlice"
import cartReducer from './cartSlice'
import promotionReducer from "./promotionData"
export default configureStore({
  reducer: {
     menu: menuReducer,
     cart: cartReducer,
     promotion: promotionReducer,
  },
})