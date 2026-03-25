import { createSlice } from "@reduxjs/toolkit";

const initialStateOfLoginForm = {
  email: "",
  password: "",
  AccessToken: "",
};

export const LoginSlice = createSlice({
  name: "Login",
  initialState: initialStateOfLoginForm,
  reducers: {
    clickOnLogin: (state,data) => {

      const {userName, password, AccessToken} = data.payload
      state.email = userName, 
      state.password = password;
      state.AccessToken = AccessToken ;
    },
  },
});

export const { clickOnLogin } = LoginSlice.actions;

export default LoginSlice.reducer;
