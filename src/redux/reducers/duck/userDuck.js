import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  usersResponse: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    // response reducers
    usersResponse(state, { payload }) {
      return {
        ...state,
        usersResponse: payload.response,
      };
    },

    // request reducers
    usersRequest: (state) => state,
  },
});

export const { usersResponse, usersRequest } = usersSlice.actions;

export default usersSlice.reducer;
