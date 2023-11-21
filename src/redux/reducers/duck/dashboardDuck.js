import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  getSubjectsPrefData: null,
  postSubjectsPrefData: null,
  dashboardPendingQuizData: null,
  dashboardGraphData: null,
  dashboardSubjectTopicsData: null,
  isLoading: false,
  topicID: null,
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

    dashboardPendingQuizResponse(state, { payload }) {
      return {
        ...state,
        dashboardPendingQuizData: payload.response,
      };
    },

    dashboardGraphResponse(state, { payload }) {
      return {
        ...state,
        dashboardGraphData: payload.response,
      };
    },

    dashboardSubjectTopicsResponse(state, { payload }) {
      return {
        ...state,
        dashboardSubjectTopicsData: payload.response,
      };
    },

    getTopicId(state, { payload }) {
      return {
        ...state,
        topicID: payload,
      };
    },
    // request reducers
    getSubjectPrefRequest: (state) => state,
    postSubjectPrefRequest: (state) => state,
    dashboardPendingQuizRequest: (state) => state,
    dashboardGraphRequest: (state) => state,
    dashboardSubjectTopicsRequest: (state) => state,

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
  dashboardPendingQuizResponse,
  dashboardGraphResponse,
  dashboardSubjectTopicsResponse,
  dashboardPendingQuizRequest,
  dashboardGraphRequest,
  dashboardSubjectTopicsRequest,
  getTopicId,
  dashboardLoader,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
