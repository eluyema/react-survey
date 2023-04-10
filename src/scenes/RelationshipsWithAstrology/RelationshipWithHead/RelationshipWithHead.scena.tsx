import React from "react";
import { SurveyStageData } from "@/common/types/survey/SurveyStageData";
import SurveyIntermediateStage from "@/features/activeSurvey/components/SurveyIntermediateStage/SurveyIntermediateStage.feature";
import { slugs } from "@/common/constants/slugs.contant";
import { basePathnames } from "@/common/constants/pathnames.constant";
import { useSelector } from "react-redux";
import { attributesSelector } from "@/features/activeSurvey/activeSurveySlice";

const stage: SurveyStageData = {
  stageId: "11",
  slug: slugs.relationshipsWithAstrology.relationshipDecisionWithHead,
  necessaryAttributes: ["zodiac"],
  possibleParentStages: ["8"],
  modifiableAttributes: [],
  text: "Based on our data, 39% of {Zodiac} people also make decisions with their head. But don't worry, we'll consider that while creating your guidance plan.",
  footerText: "Nicosia, Cyprus",
  nextSlug: slugs.relationshipsWithAstrology.sendGaidancePlan,
};

const RelationshipWithHead = () => {
  const attributes = useSelector(attributesSelector);

  const getPreaperedText = () => {
    const zodiac = attributes.zodiac.charAt(0).toUpperCase() + attributes.zodiac.slice(1);
    return stage.text.replace("{Zodiac}", zodiac);
  };

  return (
    <SurveyIntermediateStage
      basepath={basePathnames.relationshipsWithAstrology}
      initSlug={slugs.relationshipsWithAstrology.init}
      preparedText={getPreaperedText()}
      stageData={stage}
    />
  );
};

export default RelationshipWithHead;
