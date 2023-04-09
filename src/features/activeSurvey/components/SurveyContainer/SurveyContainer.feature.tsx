import React from "react";
import {
  HeaderSpace,
  SurveyContainerBackButton,
  SurveyContainerFooter,
  SurveyContainerFooterRow,
  SurveyContainerHeader,
  SurveyContainerHeaderContent,
  SurveyContainerLogoWrapper,
  SurveyContainerMain,
  SurveyContainerWrapper,
} from "./SurveyContainer.styles";
import { ReactComponent as LogoBlackIcon } from "@/assets/logo-black.svg";
import { ReactComponent as BackBlackIcon } from "@/assets/back-black.svg";
import { ReactComponent as LogoWhiteIcon } from "@/assets/logo-white.svg";
import { ReactComponent as BackWhiteIcon } from "@/assets/back-white.svg";

interface SurveyContainerProps {
  darkMode?: boolean;
  showBackButton?: boolean;
  onBackClick?: () => void;
  footerText?: string | string[];
  children: React.ReactNode;
}

const SurveyContainer: React.FC<SurveyContainerProps> = ({
  children,
  darkMode = false,
  showBackButton = false,
  footerText = [],
  onBackClick,
}) => {
  const footerStrings = Array.isArray(footerText) ? footerText : [footerText];

  return (
    <SurveyContainerWrapper gradient={darkMode}>
      <SurveyContainerHeader>
        <SurveyContainerHeaderContent>
          {showBackButton ? (
            <SurveyContainerBackButton onClick={onBackClick} darkBackground={!darkMode}>
              {darkMode ? <BackWhiteIcon /> : <BackBlackIcon />}
            </SurveyContainerBackButton>
          ) : (
            <HeaderSpace />
          )}
          <SurveyContainerLogoWrapper>
            {darkMode ? <LogoWhiteIcon /> : <LogoBlackIcon />}
          </SurveyContainerLogoWrapper>
          <HeaderSpace />
        </SurveyContainerHeaderContent>
      </SurveyContainerHeader>
      <SurveyContainerMain>{children}</SurveyContainerMain>
      <SurveyContainerFooter>
        {footerStrings.map((text) => (
          <SurveyContainerFooterRow key={text}>{text}</SurveyContainerFooterRow>
        ))}
      </SurveyContainerFooter>
    </SurveyContainerWrapper>
  );
};

export default SurveyContainer;
