import { createSlice } from '@reduxjs/toolkit';

// Initial State
export const INITIAL_STATE = {
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    // request reducers
    userRequest: (state) => state,
    // response reducers
    userResponse(state, { payload }) {
      return {
        ...state,
        signupRes: payload.response,
      };
    },
  },
});
export const { userRequest, userResponse } = userSlice.actions;
export default userSlice.reducer;
