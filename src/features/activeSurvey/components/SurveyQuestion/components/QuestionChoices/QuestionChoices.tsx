import { SurveryQuestionVariantData } from "@/common/types/survey/SurveryQuestionVariantData";
import React from "react";
import { QuestionChoicesSection } from "./QuestionChoices.styles";
import Button from "@/ui/Button/Button.ui";

interface QuestionChoicesProps {
  choices: SurveryQuestionVariantData[];
}

const QuestionChoices: React.FC<QuestionChoicesProps> = ({ choices }) => {
  return (
    <QuestionChoicesSection>
      {choices.map(({ displayText, value }) => (
        <Button key={value} fullWidth>
          {displayText}
        </Button>
      ))}
    </QuestionChoicesSection>
  );
};

export default QuestionChoices;
