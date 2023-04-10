import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/providers/ReduxProvider/rootReducer";
import { useNavigate } from "react-router-dom";
import { moveBack } from "../../activeSurveySlice";

interface SurveyContainerProps {
  darkMode?: boolean;
  footerText?: string | string[];
  initSlug: string;
  basepath: string;
  children: React.ReactNode;
}

const SurveyContainer: React.FC<SurveyContainerProps> = ({
  children,
  darkMode = false,
  footerText = [],
  basepath,
  initSlug,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const footerStrings = Array.isArray(footerText) ? footerText : [footerText];
  const passedStages = useSelector((state: RootState) => state.activeSurvey.passedStages);
  const showBackButton = !!passedStages.length;
  const onBackClick = () => {
    const lastStage = passedStages[passedStages.length - 1];
    dispatch(moveBack());
    navigate(`${basepath}/${lastStage.slug}`, { replace: true });
  };
  useEffect(() => {
    const initPath = basepath + "/" + initSlug;
    console.log(initPath, location.pathname, initPath === location.pathname);
    if (location.pathname === initPath) {
      return;
    }
    if (passedStages.length === 0) {
      navigate(`${basepath}/${initSlug}`, { replace: true });
    }
  }, [passedStages]);

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
          <SurveyContainerFooterRow darkMode={darkMode} key={text}>
            {text}
          </SurveyContainerFooterRow>
        ))}
      </SurveyContainerFooter>
    </SurveyContainerWrapper>
  );
};

export default SurveyContainer;
