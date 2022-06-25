import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.userAuthenticated = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setAuthenticated } = authSlice.actions;
