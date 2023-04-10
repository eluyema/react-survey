import styled from "styled-components";

const SurveySendResultContainer = styled.div`
  max-width: 330px;
  margin: 0 auto;
  margin-top: 20px;
  @media screen and (max-width: ${({ theme }) => theme.screens.tablet}) {
    margin-top: 136px;
  }
`;

const SurveySendResultText = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 28px;
  text-align: center;
`;

const SurveySendResultInputBlock = styled.div`
  margin-top: 30px;
  height: 50px;
`;

const SurveySendResultSubmitWrapper = styled.div`
  margin-top: 50px;
`;

const SurveySendResultErrorLabel = styled.label`
  color: ${({ theme }) => theme.colors.typographyRed};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-left: 10px;
  line-height: 125%;
`;

export {
  SurveySendResultContainer,
  SurveySendResultText,
  SurveySendResultInputBlock,
  SurveySendResultSubmitWrapper,
  SurveySendResultErrorLabel,
};
