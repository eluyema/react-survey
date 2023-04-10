import styled from "styled-components";

const SurveyStageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  margin: 0 auto;
  margin-top: 20px;
`;

const SurveyStageText = styled.h2`
  margin-top: 20px;
  white-space: pre-wrap;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.typographyWhite};
  text-align: center;
  line-height: 135%;
`;

const SurveyStageImageWrapper = styled.div`
  margin: 0 auto;
`;

const SurveyStageNavigationButtons = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 10px;
`;

export {
  SurveyStageContainer,
  SurveyStageText,
  SurveyStageImageWrapper,
  SurveyStageNavigationButtons,
};
