import { createSlice } from "@reduxjs/toolkit";
import MENU_DATA from "../Data/MenuData"; // this data will be fetch from Data base later

const initialState = {
    items: MENU_DATA,
    activeCategory: "Special Pizza",
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.activeCategory = action.payload;
        },
    },
});

export const { setCategory } = menuSlice.actions;
export default menuSlice.reducer;