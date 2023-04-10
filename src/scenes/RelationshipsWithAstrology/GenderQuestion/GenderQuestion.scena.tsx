import React from "react";
import SurveyQuestion from "@/features/activeSurvey/components/SurveyQuestion/SurveyQuestion.feature";
import { SurveyQuestionData } from "@/common/types/survey/SurveyQuestionData";
import { useNavigate } from "react-router-dom";
import { moveOnStage } from "@/features/activeSurvey/activeSurveySlice";
import { useDispatch } from "react-redux";
import { slugs } from "@/common/constants/slugs.contant";
import { basePathnames } from "@/common/constants/pathnames.constant";

const question: SurveyQuestionData = {
  stageId: "1",
  slug: slugs.relationshipsWithAstrology.init,
  questionType: "choice",
  necessaryAttributes: [],
  possibleParentStages: [],
  modifiableAttributes: ["gender"],
  text: "Select your gender:",
  variants: [
    {
      value: "female",
      nextStageSlug: slugs.relationshipsWithAstrology.dateOfBirth,
      displayText: "Female",
    },
    {
      value: "male",
      nextStageSlug: slugs.relationshipsWithAstrology.dateOfBirth,
      displayText: "Male",
    },
  ],
  footerText: [
    "By continuing I agree with Privacy policy and Terms of use.",
    "Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia, Cyprus",
  ],
};

const GenderQuestionScena = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitQuestion = (value: unknown, nextSlug: string) => {
    if (typeof value !== "string") {
      return;
    }

    const action = moveOnStage({
      stageId: question.stageId,
      slug: question.slug,
      isQuestion: true,
      value,
      attributes: { gender: value },
      modifiedAttributes: question.modifiableAttributes,
    });

    dispatch(action);
    navigate(`${basePathnames.relationshipsWithAstrology}/${nextSlug}`, { replace: true });
  };
  return (
    <SurveyQuestion
      basepath={basePathnames.relationshipsWithAstrology}
      initSlug={slugs.relationshipsWithAstrology.init}
      question={question}
      preparedText={question.text}
      onSubmitQuestion={onSubmitQuestion}
    />
  );
};

export default GenderQuestionScena;
