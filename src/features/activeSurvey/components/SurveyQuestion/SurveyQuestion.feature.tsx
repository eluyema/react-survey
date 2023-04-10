import { SurveyQuestionData } from "@/common/types/survey/SurveyQuestionData";
import React from "react";
import SurveyContainer from "../SurveyContainer/SurveyContainer.feature";
import {
  SurveyQuestionInputSection,
  SurveyQuestionContainer,
  SurveyQuestionText,
} from "./SurveyQuestion.styles";
import QuestionChoices from "./components/QuestionChoices/QuestionChoices";
import QuestionDateSelection from "./components/QuestionDateSelection/QuestionDateSelection";

interface SurveyQuestionProps {
  question: SurveyQuestionData;
  onSubmitQuestion: (value: unknown, nextSlug: string) => void;
  initSlug: string;
  basepath: string;
  preparedText: string;
  darkMode?: boolean;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  question,
  initSlug,
  basepath,
  preparedText,
  onSubmitQuestion,
  darkMode = false,
}) => {
  const { footerText, questionType, variants } = question;

  return (
    <SurveyContainer
      initSlug={initSlug}
      basepath={basepath}
      darkMode={darkMode}
      footerText={footerText}
    >
      <SurveyQuestionContainer>
        <SurveyQuestionText>{preparedText}</SurveyQuestionText>
        <SurveyQuestionInputSection>
          {questionType === "choice" && !!variants && (
            <QuestionChoices choices={variants} onSubmitQuestion={onSubmitQuestion} />
          )}
          {questionType === "date" && (
            <QuestionDateSelection
              nextSlug={question.nextSlug as string}
              onSubmitQuestion={onSubmitQuestion}
            />
          )}
        </SurveyQuestionInputSection>
      </SurveyQuestionContainer>
    </SurveyContainer>
  );
};

export default SurveyQuestion;
