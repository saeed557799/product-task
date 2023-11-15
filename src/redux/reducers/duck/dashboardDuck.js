import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  getSubjectsPrefData: null,
  postSubjectsPrefData: null,
  isLoading: false,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: INITIAL_STATE,
  reducers: {
    // response reducers
    getSubjectPrefResponse(state, { payload }) {
      return {
        ...state,
        getSubjectsPrefData: payload.response,
      };
    },

    postSubjectPrefResponse(state, { payload }) {
      return {
        ...state,
        postSubjectsPrefData: payload.response,
      };
    },

    // request reducers
    getSubjectPrefRequest: (state) => state,
    postSubjectPrefRequest: (state) => state,
  },
});

export const {
  getSubjectPrefResponse,
  postSubjectPrefResponse,
  getSubjectPrefRequest,
  postSubjectPrefRequest,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
