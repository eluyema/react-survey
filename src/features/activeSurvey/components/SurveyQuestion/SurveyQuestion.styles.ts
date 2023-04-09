import styled from "styled-components";

const SurveyQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  margin: 0 auto;
  margin-top: 20px;
`;

const SurveyQuestionText = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.typographyBlack};
  line-height: 28px;
`;

const SurveyQuestionInputSection = styled.div`
  margin-top: 30px;
`;

const SurveyQuestionSubmitSection = styled.div`
  margin-top: 30px;
`;

export {
  SurveyQuestionContainer,
  SurveyQuestionText,
  SurveyQuestionInputSection,
  SurveyQuestionSubmitSection,
};
