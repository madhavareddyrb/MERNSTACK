import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Redux_ToolKit/Login/LoginSlice";
import SignUpSlice from "./Redux_ToolKit/Login/SignUpSlics";
import newSlice from "./Redux_ToolKit/Login/newSlice";

export const store = configureStore({
  reducer: {
    Login: LoginSlice,
    SignUp: SignUpSlice,
    newSlice: newSlice,
  },
});
