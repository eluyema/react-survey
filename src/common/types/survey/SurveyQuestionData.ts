import { SurveryQuestionVariantData } from "./SurveryQuestionVariantDataData";
import { SurveyStageData } from "./SurveyStageData";

interface SurveyQuestionData extends SurveyStageData {
  questionType: "choice" | "date";
  variants?: SurveryQuestionVariantData[];
  defaultNextSlug?: string;
}

export type { SurveyQuestionData };
