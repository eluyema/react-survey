import { SurveryQuestionVariantData } from "@/common/types/survey/SurveryQuestionVariantData";
import React from "react";
import { QuestionChoiceText, QuestionChoicesSection } from "./QuestionChoices.styles";
import Button from "@/ui/Button/Button.ui";

interface QuestionChoicesProps {
  choices: SurveryQuestionVariantData[];
  onSubmitQuestion: (value: unknown, nextSlug: string) => void;
}

const QuestionChoices: React.FC<QuestionChoicesProps> = ({ choices, onSubmitQuestion }) => {
  return (
    <QuestionChoicesSection>
      {choices.map(({ displayText, value, nextStageSlug }) => (
        <Button
          onClick={() => {
            onSubmitQuestion(value, nextStageSlug);
          }}
          key={value}
          fullWidth
        >
          <QuestionChoiceText>{displayText}</QuestionChoiceText>
        </Button>
      ))}
    </QuestionChoicesSection>
  );
};

export default QuestionChoices;
