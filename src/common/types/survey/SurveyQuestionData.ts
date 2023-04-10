import { SurveryQuestionVariantData } from "./SurveryQuestionVariantData";
import { SurveyStageData } from "./SurveyStageData";

interface SurveyQuestionData extends SurveyStageData {
  questionType: "choice" | "date";
  variants?: SurveryQuestionVariantData[];
}

export type { SurveyQuestionData };
