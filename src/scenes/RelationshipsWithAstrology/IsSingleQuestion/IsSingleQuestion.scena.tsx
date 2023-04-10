import React from "react";
import SurveyQuestion from "@/features/activeSurvey/components/SurveyQuestion/SurveyQuestion.feature";
import { SurveyQuestionData } from "@/common/types/survey/SurveyQuestionData";
import { useNavigate } from "react-router-dom";
import { moveOnStage } from "@/features/activeSurvey/activeSurveySlice";
import { useDispatch } from "react-redux";
import { slugs } from "@/common/constants/slugs.contant";
import { basePathnames } from "@/common/constants/pathnames.constant";

const question: SurveyQuestionData = {
  stageId: "3",
  slug: slugs.relationshipsWithAstrology.isSingle,
  questionType: "choice",
  necessaryAttributes: [],
  possibleParentStages: ["2"],
  modifiableAttributes: [],
  text: "So we can get to know you better, tell us about your relationship status.",
  variants: [
    {
      value: "single",
      nextStageSlug: slugs.relationshipsWithAstrology.isSingleParent,
      displayText: "Single",
    },
    {
      value: "notsingle",
      nextStageSlug: slugs.relationshipsWithAstrology.isParent,
      displayText: "In a relationship",
    },
  ],
  footerText: "Nicosia, Cyprus",
};

const IsSingleQuestion = () => {
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
      attributes: {},
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

export default IsSingleQuestion;
