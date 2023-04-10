import { SurveyStageData } from "@/common/types/survey/SurveyStageData";
import React from "react";
import SurveyContainer from "../SurveyContainer/SurveyContainer.feature";
import {
  SurveyStageContainer,
  SurveyStageImageWrapper,
  SurveyStageNavigationButtons,
  SurveyStageText,
} from "./SurveyIntermediateStage.styles";
import { ReactComponent as HeartAndHeadIcon } from "@/assets/heart-and-head.svg";
import Button from "@/ui/Button/Button.ui";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  moveBack,
  moveOnStage,
  passedStageSelector,
} from "@/features/activeSurvey/activeSurveySlice";

interface SurveyIntermediateStageProps {
  stageData: SurveyStageData;
  initSlug: string;
  basepath: string;
  preparedText: string;
}

const SurveyIntermediateStage: React.FC<SurveyIntermediateStageProps> = ({
  stageData,
  initSlug,
  basepath,
  preparedText,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passedStages = useSelector(passedStageSelector);

  const { footerText } = stageData;

  const handleNext = () => {
    const action = moveOnStage({
      stageId: stageData.stageId,
      slug: stageData.slug,
      isQuestion: false,
      attributes: {},
      modifiedAttributes: stageData.modifiableAttributes,
    });

    dispatch(action);
    navigate(`${basepath}/${stageData.nextSlug}`);
  };

  const onBackClick = () => {
    const lastStage = passedStages[passedStages.length - 1];
    dispatch(moveBack());
    navigate(`${basepath}/${lastStage.slug}`, { replace: true });
  };

  return (
    <SurveyContainer darkMode initSlug={initSlug} basepath={basepath} footerText={footerText}>
      <SurveyStageContainer>
        <SurveyStageImageWrapper>
          <HeartAndHeadIcon />
        </SurveyStageImageWrapper>
        <SurveyStageText>{preparedText}</SurveyStageText>
        <SurveyStageNavigationButtons>
          <Button fontSize="big" variant="dark-mode-outlined" fullWidth onClick={onBackClick}>
            Back
          </Button>
          <Button fontSize="big" variant="dark-mode-contained" fullWidth onClick={handleNext}>
            Next
          </Button>
        </SurveyStageNavigationButtons>
      </SurveyStageContainer>
    </SurveyContainer>
  );
};

export default SurveyIntermediateStage;
