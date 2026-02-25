import { createSlice } from "@reduxjs/toolkit";
import { promotions } from "../Data/PromotionData";

const promotionSlice = createSlice({
  name: "promotion",
  initialState: {
    promotions: promotions,
  },
  reducers: {},
});

export default promotionSlice.reducer;