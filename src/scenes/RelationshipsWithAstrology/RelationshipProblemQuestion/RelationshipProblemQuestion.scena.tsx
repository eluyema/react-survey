import React from "react";
import SurveyQuestion from "@/features/activeSurvey/components/SurveyQuestion/SurveyQuestion.feature";
import { SurveyQuestionData } from "@/common/types/survey/SurveyQuestionData";
import { useNavigate } from "react-router-dom";
import { attributesSelector, moveOnStage } from "@/features/activeSurvey/activeSurveySlice";
import { useDispatch, useSelector } from "react-redux";
import { slugs } from "@/common/constants/slugs.contant";
import { basePathnames } from "@/common/constants/pathnames.constant";

const question: SurveyQuestionData = {
  stageId: "6",
  slug: slugs.relationshipsWithAstrology.relationshipProblem,
  questionType: "choice",
  necessaryAttributes: ["gender", "age", "parent"],
  possibleParentStages: ["4"],
  modifiableAttributes: [],
  text: "{Gender} {age} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?",
  variants: [
    {
      value: "unhappy",
      // eslint-disable-next-line sonarjs/no-duplicate-string
      nextStageSlug: slugs.relationshipsWithAstrology.makeDecisions,
      displayText: "I'm very unhappy with how things are going in my relationship",
    },
    {
      value: "medium",
      nextStageSlug: slugs.relationshipsWithAstrology.makeDecisions,
      displayText: "I'm unhappy with parts of my relationship, but some things are working well",
    },
    {
      value: "happy",
      nextStageSlug: slugs.relationshipsWithAstrology.makeDecisions,
      displayText: "I'm generally happy in my relationship",
    },
  ],
  footerText: "Nicosia, Cyprus",
};

const RelationshipProblemQuestion = () => {
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
    const gender = attributes.gender.charAt(0).toUpperCase() + attributes.gender.slice(1);
    let text = question.text.replace("{Gender}", gender);
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
      question={question}
      preparedText={getPreaperedText()}
      onSubmitQuestion={onSubmitQuestion}
    />
  );
};

export default RelationshipProblemQuestion;
