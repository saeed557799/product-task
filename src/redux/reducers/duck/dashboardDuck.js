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

    // other
    dashboardLoader(state, { payload }) {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});

export const {
  getSubjectPrefResponse,
  postSubjectPrefResponse,
  getSubjectPrefRequest,
  postSubjectPrefRequest,
  dashboardLoader,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
