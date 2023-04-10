import React from "react";
import SurveyQuestion from "@/features/activeSurvey/components/SurveyQuestion/SurveyQuestion.feature";
import { SurveyQuestionData } from "@/common/types/survey/SurveyQuestionData";
import { useNavigate } from "react-router-dom";
import { moveOnStage } from "@/features/activeSurvey/activeSurveySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/providers/ReduxProvider/rootReducer";
import { slugs } from "@/common/constants/slugs.contant";
import { basePathnames } from "@/common/constants/pathnames.constant";
const question: SurveyQuestionData = {
  stageId: "8",
  slug: slugs.relationshipsWithAstrology.makeDecisions,
  questionType: "choice",
  necessaryAttributes: [],
  possibleParentStages: ["7", "6"],
  modifiableAttributes: [],
  text: "Do you make decisions with your head or your heart?",
  variants: [
    {
      value: "heart",
      // eslint-disable-next-line sonarjs/no-duplicate-string
      nextStageSlug: slugs.relationshipsWithAstrology.relationshipDecisionWithHeart,
      displayText: "Heart",
    },
    {
      value: "head",
      nextStageSlug: slugs.relationshipsWithAstrology.relationshipDecisionWithHead,
      displayText: "Head",
    },
    {
      value: "both",
      nextStageSlug: slugs.relationshipsWithAstrology.relationshipDecisionWithBoth,
      displayText: "Both",
    },
  ],
  footerText: "Nicosia, Cyprus",
};

const MakeDecisionsQuestion = () => {
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

export default MakeDecisionsQuestion;
