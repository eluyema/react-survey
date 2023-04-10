import { PassedSurveyStage } from "@/common/types/survey/PassedStage";
import { removeFields } from "@/utils/object/removeFields.utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddStageAction {
  slug: string;
  stageId: string;
  isQuestion: boolean;
  attributes: Record<string, string>;
  modifiedAttributes: string[];
  value?: unknown;
}

interface ActiveSurveyState {
  passedStages: PassedSurveyStage[];
  attributes: Record<string, string>;
}

const initialState: ActiveSurveyState = {
  passedStages: [],
  attributes: {},
};

export const activeSurveySlice = createSlice({
  name: "activeSurveySlice",
  initialState,
  reducers: {
    moveBack: (state) => {
      const passedStage = state.passedStages.pop();
      const modifiedAttributes = passedStage?.modifiedAttributes;
      if (modifiedAttributes) {
        state.attributes = removeFields(state.attributes, modifiedAttributes) as Record<
          string,
          string
        >;
      }
    },
    moveOnStage: (state, action: PayloadAction<AddStageAction>) => {
      const { slug, stageId, isQuestion, attributes, modifiedAttributes, value } = action.payload;

      const passedStage: PassedSurveyStage = {
        stageId,
        slug,
        modifiedAttributes,
        isQuestion,
        value,
      };

      state.passedStages.push(passedStage);

      state.attributes = { ...state.attributes, ...attributes };
    },
    clearCurrentSurveyData: (state) => {
      state.passedStages = [];
      state.attributes = {};
    },
  },
});

export const { moveBack, moveOnStage, clearCurrentSurveyData } = activeSurveySlice.actions;

export default activeSurveySlice.reducer;
