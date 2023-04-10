import React from "react";
import SurveyQuestion from "@/features/activeSurvey/components/SurveyQuestion/SurveyQuestion.feature";
import { SurveyQuestionData } from "@/common/types/survey/SurveyQuestionData";
import { useNavigate } from "react-router-dom";
import { attributesSelector, moveOnStage } from "@/features/activeSurvey/activeSurveySlice";
import { useDispatch, useSelector } from "react-redux";
import { slugs } from "@/common/constants/slugs.contant";
import { basePathnames } from "@/common/constants/pathnames.constant";

const question: SurveyQuestionData = {
  stageId: "7",
  slug: slugs.relationshipsWithAstrology.singleProblem,
  questionType: "choice",
  necessaryAttributes: ["gender", "age", "parent"],
  possibleParentStages: ["5"],
  modifiableAttributes: [],
  text: "Single {gender} {age} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?",
  variants: [
    {
      value: "unhappy",
      // eslint-disable-next-line sonarjs/no-duplicate-string
      nextStageSlug: slugs.relationshipsWithAstrology.makeDecisions,
      displayText: "I was unhappy with low things were going in my relationship",
    },
    {
      value: "medium",
      nextStageSlug: slugs.relationshipsWithAstrology.makeDecisions,
      displayText: "I was unhappy with parts of my relationship, but some thing were working",
    },
    {
      value: "happy",
      nextStageSlug: slugs.relationshipsWithAstrology.makeDecisions,
      displayText: "I was generally happy with my relationship",
    },
    {
      value: "never",
      nextStageSlug: slugs.relationshipsWithAstrology.makeDecisions,
      displayText: "I've never been in a relationship",
    },
  ],
  footerText: "Nicosia, Cyprus",
};

const SingleProblemQuestion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const attributes = useSelector(attributesSelector);

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

  const getPreaperedText = () => {
    let text = question.text.replace("{gender}", attributes.gender);
    text = text.replace("{age}", attributes.age);
    text = text.replace(
      "{who have children (if have children)}",
      attributes.parent === "true" ? "who have children" : ""
    );
    return text;
  };

  return (
    <SurveyQuestion
      basepath={basePathnames.relationshipsWithAstrology}
      initSlug={slugs.relationshipsWithAstrology.init}
      preparedText={getPreaperedText()}
      question={question}
      onSubmitQuestion={onSubmitQuestion}
    />
  );
};

export default SingleProblemQuestion;
