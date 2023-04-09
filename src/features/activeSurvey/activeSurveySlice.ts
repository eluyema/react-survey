import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveSurveyState {
  value: number;
}

const initialState: ActiveSurveyState = {
  value: 0,
};

export const activeSurveySlice = createSlice({
  name: "activeSurveySlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = activeSurveySlice.actions;

export default activeSurveySlice.reducer;
