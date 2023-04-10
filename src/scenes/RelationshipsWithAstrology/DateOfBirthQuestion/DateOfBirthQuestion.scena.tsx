import React from "react";
import SurveyQuestion from "@/features/activeSurvey/components/SurveyQuestion/SurveyQuestion.feature";
import { SurveyQuestionData } from "@/common/types/survey/SurveyQuestionData";
import { useNavigate } from "react-router-dom";
import { moveOnStage } from "@/features/activeSurvey/activeSurveySlice";
import { useDispatch } from "react-redux";
import { slugs } from "@/common/constants/slugs.contant";
import { basePathnames } from "@/common/constants/pathnames.constant";
import { calculateAge } from "@/utils/date/calculateAge.utils";
import { getZodiacSign } from "@/utils/date/getZodiacSign.utils";

const question: SurveyQuestionData = {
  stageId: "2",
  slug: slugs.relationshipsWithAstrology.dateOfBirth,
  questionType: "date",
  necessaryAttributes: [],
  possibleParentStages: ["1"],
  modifiableAttributes: ["zodiac", "age"],
  text: "What's your date of birth?",
  nextSlug: slugs.relationshipsWithAstrology.isSingle,
  footerText: "Nicosia, Cyprus",
};

const DateOfBirthQuestion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitQuestion = (value: unknown, nextSlug: string) => {
    if (!(value instanceof Date)) {
      return;
    }

    const age = String(calculateAge(value)) + " years";

    const zodiac = getZodiacSign(value);

    const action = moveOnStage({
      stageId: question.stageId,
      slug: question.slug,
      isQuestion: true,
      value: value.toISOString(),
      attributes: { age, zodiac },
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

export default DateOfBirthQuestion;
