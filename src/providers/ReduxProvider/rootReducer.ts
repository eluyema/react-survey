import activeSurveySlice from "@/features/activeSurvey/activeSurveySlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  activeSurvey: activeSurveySlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
