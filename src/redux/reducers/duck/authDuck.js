import { createSlice } from '@reduxjs/toolkit';
// Initial State
export const INITIAL_STATE = {
  signupRes: null,
  loginRes: null,
  isLoading: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    // request reducers
    loginRequest: (state) => state,
    signupRequest: (state) => state,
    // response reducers
    signupResponse(state, { payload }) {
      return {
        ...state,
        signupRes: payload.response,
      };
    },
    loginResponse(state, { payload }) {
      return {
        ...state,
        loginRes: payload.response,
      };
    },
    // other reducers
    authLoading(state, { payload }) {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});
export const {
  signupRequest,
  signupResponse,
  loginRequest,
  loginResponse,
  authLoading,
} = authSlice.actions;
export default authSlice.reducer;
