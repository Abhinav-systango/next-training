import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User, UserCredential, UserInfo, UserMetadata, UserProfile } from "firebase/auth";

export interface IAuthState {
  isLoggedIn: boolean;
  user: UserProfile | null
}

const initialState: IAuthState = {
  isLoggedIn: false,
  user: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<IAuthState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
    },

    logoutUser: (state, action) => {
      state.user = null
      state.isLoggedIn = false
    }
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
