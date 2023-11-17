import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  quizResultData: null,
  isLoading: false,
};

export const resultSlice = createSlice({
  name: 'result',
  initialState: INITIAL_STATE,
  reducers: {
    // request reducers
    quizResultRequest: (state) => state,

    // response reducers
    quizResultResponse(state, { payload }) {
      return {
        ...state,
        quizResultData: payload.response,
      };
    },

    // other reducers
    quizResultLoading(state, { payload }) {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});

export const { quizResultRequest, quizResultResponse, quizResultLoading } =
  resultSlice.actions;

export default resultSlice.reducer;
