import styled from "styled-components";

const SurveyContainerWrapper = styled.div<{ gradient: boolean }>`
  height: 100vh;
  background: ${({ theme, gradient }) =>
    gradient ? theme.colors.backgroundBlueGradient : theme.colors.backgroundPink};
  display: flex;
  flex-direction: column;
  padding: 0 15px 10px;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    padding-bottom: 15px;
  }
`;

const SurveyContainerHeader = styled.header`
  height: 54px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SurveyContainerHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: 1200px;
`;

const SurveyContainerMain = styled.main`
  width: 100%;
  flex: 1;
`;

const SurveyContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-direction: column;
  padding: 10px 0;
`;

const SurveyContainerFooterRow = styled.h5`
  max-width: 330px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  line-height: 140%;
  text-align: center;
`;

const SurveyContainerBackButton = styled.button<{ darkBackground?: boolean }>`
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.25s;
  padding: 5px;
  border-radius: 5px;
  width: 34px;

  &:hover {
    background-color: ${({ theme, darkBackground }) =>
      darkBackground
        ? theme.colors.backgroundTransparentDarkGrey
        : theme.colors.backgroundTransparentLightGrey};
  }
`;

const HeaderSpace = styled.div`
  width: 34px;
`;

const SurveyContainerLogoWrapper = styled.div``;

export {
  SurveyContainerWrapper,
  SurveyContainerHeader,
  SurveyContainerBackButton,
  SurveyContainerLogoWrapper,
  SurveyContainerHeaderContent,
  SurveyContainerFooter,
  SurveyContainerFooterRow,
  SurveyContainerMain,
  HeaderSpace,
};
