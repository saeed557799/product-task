import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  subjectsData: null,
  topicsData: null,
  contentSumaryData: null,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState: INITIAL_STATE,
  reducers: {
    // response reducers
    subjectResponse(state, { payload }) {
      return {
        ...state,
        subjectsData: payload.response,
      };
    },

    topicsResponse(state, { payload }) {
      return {
        ...state,
        topicsData: payload.response,
      };
    },

    contentSumaryResponse(state, { payload }) {
      return {
        ...state,
        contentSumaryData: payload.response,
      };
    },

    // request reducers
    subjectRequest: (state) => state,
    topicsRequest: (state) => state,
    contentSumaryRequest: (state) => state,
  },
});

export const {
  subjectResponse,
  subjectRequest,
  topicsResponse,
  topicsRequest,
  contentSumaryResponse,
  contentSumaryRequest,
} = contentSlice.actions;

export default contentSlice.reducer;
