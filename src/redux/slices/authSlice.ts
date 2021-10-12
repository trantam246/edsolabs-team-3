import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number | string;
  name: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
  dataName?: any;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  dataName: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {},
    loginSuccess(state, action) {
      state.isLoggedIn = true;
    },
    loginFailed(state, action) {
      state.logging = false;
    },
    logout(state) {
      localStorage.removeItem('access_token');
      state.isLoggedIn = false;
    },
  },
});
// Actions
export const authActions = authSlice.actions;
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
const authReducer = authSlice.reducer;
export default authReducer;
