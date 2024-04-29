import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isLoggedIn: boolean
  user: {
    name: string | null,
    email: string | null,
    uid: string | null
  }

}

const initialState: IAuthState = {
  isLoggedIn: false,
  user: {
    name: null,
    email: null,
    uid: null
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<IAuthState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
    },

    logoutUser: (state) => {
      state.user = {
        name: null,
        email: null,
        uid: null
      }
      state.isLoggedIn = false
    }
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
