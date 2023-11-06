import { createSlice } from '@reduxjs/toolkit';

// Initial State
export const INITIAL_STATE = {
  signupRes: null,
  loginRes: null,
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
  },
});

export const { signupRequest, signupResponse, loginRequest, loginResponse } =
  authSlice.actions;

export default authSlice.reducer;
