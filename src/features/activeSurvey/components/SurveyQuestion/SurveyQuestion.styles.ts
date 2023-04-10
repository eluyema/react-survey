import styled from "styled-components";

const SurveyQuestionContainer = styled.div`
  max-width: 550px;
  margin: 0 auto;
  margin-top: 20px;
`;

const SurveyQuestionText = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.typographyDarkBlack};
  white-space: pre-wrap;
  line-height: 28px;
  min-width: 330px;
  margin: 0 auto;
  width: fit-content;
`;

const SurveyQuestionInputSection = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  max-width: 330px;
`;

export { SurveyQuestionContainer, SurveyQuestionText, SurveyQuestionInputSection };
