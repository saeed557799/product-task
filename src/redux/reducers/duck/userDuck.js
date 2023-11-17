import { createSlice } from '@reduxjs/toolkit';

// Initial State
export const INITIAL_STATE = {
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    // response reducers
    userResponse(state, { payload }) {
      return {
        ...state,
        userData: payload.response,
      };
    },
    // request reducers
    userRequest: (state) => state,
  },
});
export const { userRequest, userResponse } = userSlice.actions;
export default userSlice.reducer;
