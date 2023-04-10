import { PassedSurveyStage } from "@/common/types/survey/PassedStage";
import { QuestionAnswerUnit } from "@/common/types/survey/QuestionAnswerUnit";

const surveyStagesToResult = (stages: PassedSurveyStage[]): QuestionAnswerUnit[] => {
  const questions = stages.filter(({ isQuestion }) => isQuestion);
  return questions.map(({ value, stageId }) => ({ value, stageId }));
};

export { surveyStagesToResult };
