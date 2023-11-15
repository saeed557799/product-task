import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  startQuizData: null,
  quizSubmitData: null,
  nextQuestionData: null,
  finishQuizData: null,
  isLoading: false,
};

export const contentSlice = createSlice({
  name: 'quiz',
  initialState: INITIAL_STATE,
  reducers: {
    // request reducers
    startQuizRequest: (state) => state,
    quizSubmitRequest: (state) => state,
    nextQuestionRequest: (state) => state,
    finishQuizRequest: (state) => state,

    // response reducers
    startQuizResponse(state, { payload }) {
      return {
        ...state,
        startQuizData: payload.response,
      };
    },

    quizSubmitResponse(state, { payload }) {
      return {
        ...state,
        quizSubmitData: payload.response,
      };
    },

    nextQuestionResponse(state, { payload }) {
      return {
        ...state,
        nextQuestionData: payload.response,
      };
    },
    finishQuizResponse(state, { payload }) {
      return {
        ...state,
        finishQuizData: payload.response,
      };
    },

    // other reducers
    quizLoading(state, { payload }) {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});

export const {
  startQuizRequest,
  startQuizResponse,
  quizSubmitRequest,
  quizSubmitResponse,
  nextQuestionRequest,
  nextQuestionResponse,
  finishQuizRequest,
  finishQuizResponse,
  quizLoading,
} = contentSlice.actions;

export default contentSlice.reducer;
