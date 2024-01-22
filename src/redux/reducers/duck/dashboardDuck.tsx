import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  dashboardData: any; 
  productDetailData : any
}

// Initial State
export const INITIAL_STATE: UserState = {
  dashboardData: null,
  productDetailData: null
};

export const productSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    // response reducers
    dashboardResponse: (state, action: PayloadAction<{ response: any }>) => {
      return {
        ...state,
        dashboardData: action.payload.response,
      };
    },
    productDetailResponse: (state, action: PayloadAction<{ response: any }>) => {
      return {
        ...state,
        productDetailData: action.payload.response,
      };
    },
    // request reducers
    dashboardRequest: (state) => state,
    productDetailRequest: (state) => state,
  },
});

export const { dashboardRequest,productDetailRequest, dashboardResponse,productDetailResponse } = productSlice.actions;
export default productSlice.reducer;
