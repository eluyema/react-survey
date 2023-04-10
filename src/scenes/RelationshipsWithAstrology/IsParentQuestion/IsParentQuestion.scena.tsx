import React from "react";
import SurveyQuestion from "@/features/activeSurvey/components/SurveyQuestion/SurveyQuestion.feature";
import { SurveyQuestionData } from "@/common/types/survey/SurveyQuestionData";
import { useNavigate } from "react-router-dom";
import { moveOnStage } from "@/features/activeSurvey/activeSurveySlice";
import { useDispatch } from "react-redux";
import { slugs } from "@/common/constants/slugs.contant";
import { basePathnames } from "@/common/constants/pathnames.constant";

const question: SurveyQuestionData = {
  stageId: "4",
  slug: slugs.relationshipsWithAstrology.isParent,
  questionType: "choice",
  necessaryAttributes: [],
  possibleParentStages: ["3"],
  modifiableAttributes: ["parent"],
  text: "Are you parent?",
  variants: [
    {
      value: "true",
      nextStageSlug: slugs.relationshipsWithAstrology.relationshipProblem,
      displayText: "Yes",
    },
    {
      value: "false",
      nextStageSlug: slugs.relationshipsWithAstrology.relationshipProblem,
      displayText: "No",
    },
  ],
  footerText: "Nicosia, Cyprus",
};

const IsParentQuestion = () => {
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
      attributes: { parent: value },
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

export default IsParentQuestion;
