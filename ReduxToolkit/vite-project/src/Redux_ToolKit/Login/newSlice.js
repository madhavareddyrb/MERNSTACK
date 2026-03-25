import { createSlice } from "@reduxjs/toolkit";

const initialStateOfLoginForm = {
  email: "",
  password: "",
  accessToken: "",
};

export const newSlice = createSlice({
  name: "newSlice",
  initialState: initialStateOfLoginForm,
  reducers: {
    clickOnLogin: (state) => {
      state.email = "madhav@ga", 
      state.password = "123";
      state.accessToken = "hdhahh";
    },
  },
});

export const { clickOnLogin } = newSlice.actions;

export default newSlice.reducer;
