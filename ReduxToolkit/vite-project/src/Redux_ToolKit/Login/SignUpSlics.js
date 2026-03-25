import { createSlice } from "@reduxjs/toolkit";

const initialStateOfSignUPForm = {
  name: "",
  email: "",
  password: "",
};

export const SignUpSlice = createSlice({
  name: "SignUp",
  initialState: initialStateOfSignUPForm,
  reducers: {
    userDEtails: (state) => {
      state.email = "madhava@gmail.com";
      state.password = "password";
      state.name = "madhava";
    },
  },
});

export const { clickOnLogin } = SignUpSlice.actions;

export default SignUpSlice.reducer;
