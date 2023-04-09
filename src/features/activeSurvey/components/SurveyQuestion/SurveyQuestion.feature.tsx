import { SurveyQuestionData } from "@/common/types/survey/SurveyQuestionData";
import React from "react";
import SurveyContainer from "../SurveyContainer/SurveyContainer.feature";
import {
  SurveyQuestionInputSection,
  SurveyQuestionContainer,
  SurveyQuestionText,
  SurveyQuestionSubmitSection,
} from "./SurveyQuestion.styles";
import Button from "@/ui/Button/Button.ui";
import QuestionChoices from "./components/QuestionChoices/QuestionChoices";

interface SurveyQuestionProps {
  question: SurveyQuestionData;
  darkMode?: boolean;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({ question, darkMode = false }) => {
  const { footerText, text, questionType, variants } = question;

  return (
    <SurveyContainer darkMode={darkMode} footerText={footerText}>
      <SurveyQuestionContainer>
        <SurveyQuestionText>{text}</SurveyQuestionText>
        <SurveyQuestionInputSection>
          {questionType === "choice" && !!variants && <QuestionChoices choices={variants} />}

        </SurveyQuestionInputSection>
        <SurveyQuestionSubmitSection>
          <Button variant="gradient" fullWidth>Next</Button>
        </SurveyQuestionSubmitSection>
      </SurveyQuestionContainer>
    </SurveyContainer>
  );
};

export default SurveyQuestion;
