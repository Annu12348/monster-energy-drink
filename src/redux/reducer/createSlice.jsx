import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  localDatas: null,
}

export const AuthenticationSlice = createSlice({
  name: "Local",
  initialState,
  reducers: {
    setLocalDatas: (state, action) => {
      state.localDatas = action.payload;
    },
  },
});

export const { setLocalDatas } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;

