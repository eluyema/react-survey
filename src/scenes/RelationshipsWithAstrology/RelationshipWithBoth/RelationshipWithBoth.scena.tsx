import React from "react";
import { SurveyStageData } from "@/common/types/survey/SurveyStageData";
import SurveyIntermediateStage from "@/features/activeSurvey/components/SurveyIntermediateStage/SurveyIntermediateStage.feature";
import { slugs } from "@/common/constants/slugs.contant";
import { basePathnames } from "@/common/constants/pathnames.constant";
import { useSelector } from "react-redux";
import { attributesSelector } from "@/features/activeSurvey/activeSurveySlice";

const stage: SurveyStageData = {
  stageId: "10",
  slug: slugs.relationshipsWithAstrology.relationshipDecisionWithBoth,
  necessaryAttributes: ["zodiac"],
  possibleParentStages: ["8"],
  modifiableAttributes: [],
  text: "Wonderful!\nBased on our data, only the top 17% of {Zodiac} people make decisions with their heart and head. Using both in equal measure is the key to feeling\nharmonious in your relationships.",
  footerText: "Nicosia, Cyprus",
  nextSlug: slugs.relationshipsWithAstrology.sendGaidancePlan,
};

const RelationshipWithBoth = () => {
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

export default RelationshipWithBoth;
