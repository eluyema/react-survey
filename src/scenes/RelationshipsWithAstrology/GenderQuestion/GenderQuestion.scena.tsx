import React from "react";
import SurveyQuestion from "@/features/activeSurvey/components/SurveyQuestion/SurveyQuestion.feature";
import { SurveyQuestionData } from "@/common/types/survey/SurveyQuestionData";

const question: SurveyQuestionData = {
  stageId: "1",
  questionType: "choice",
  necessaryAttributes: [],
  necessaryPassedStages: [],
  modifiableAttributes: ["gender"],
  text: "Select your gender:",
  variants: [
    {
      value: "female",
      attributes: { gender: "Female" },
      nextStageSlug: "date-of-birth",
      displayText: "Female",
    },
    {
      value: "male",
      attributes: { gender: "Male" },
      nextStageSlug: "date-of-birth",
      displayText: "Male",
    },
  ],
  footerText: [
    "By continuing I agree with Privacy policy and Terms of use.",
    "Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia, Cyprus",
  ],
};

const GenderQuestionScena = () => {
  return <SurveyQuestion question={question} />;
};

export default GenderQuestionScena;
