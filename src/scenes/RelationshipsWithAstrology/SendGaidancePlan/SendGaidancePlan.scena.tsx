import { basePathnames } from "@/common/constants/pathnames.constant";
import { slugs } from "@/common/constants/slugs.contant";
import { SurveyStageData } from "@/common/types/survey/SurveyStageData";
import SurveySendResult from "@/features/activeSurvey/components/SurveySendResult/SurveySendResult.feature";
import React from "react";

const finalStage: SurveyStageData = {
  stageId: "13",
  slug: slugs.relationshipsWithAstrology.sendGaidancePlan,
  necessaryAttributes: [],
  possibleParentStages: ["10", "11", "12"],
  modifiableAttributes: [],
  text: "Enter your email to see how you can grow with Nebula",
  footerText: "Nicosia, Cyprus",
};

const SendGaidancePlan: React.FC = () => {
  return (
    <SurveySendResult
      basepath={basePathnames.relationshipsWithAstrology}
      initSlug={slugs.relationshipsWithAstrology.init}
      stageData={finalStage}
    />
  );
};

export default SendGaidancePlan;
