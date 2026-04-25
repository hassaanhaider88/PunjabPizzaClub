import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  isEmailVerified: false,
  isAdmin: false,
  name: "",
  email: "",
  phone: "",
  address: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogged = action.payload.isLogged;
      state.isEmailVerified = action.payload.isEmailVerified;
      state.isAdmin = action.payload.isAdmin;
      ((state.name = action.payload.name),
        (state.email = action.payload.email));
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.removeItem("PPCLUserToken")
      state.isLogged = false;
      state.isEmailVerified = false;
      state.isAdmin = false;
      state.name = "";
      state.email = "";
      state.phone = "";
      state.address = "";
    },
    updateProfile: (state, action) => {
      state.isEmailVerified = action.payload.isEmailVerified;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
    },
  },
});

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
