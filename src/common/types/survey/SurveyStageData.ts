interface SurveyStageData {
  stageId: string;
  necessaryPassedStages: string[];
  backStageSlug?: string;
  necessaryAttributes: string[];
  modifiableAttributes: string[];
  text: string;
  footerText?: string | string[];
}

export type { SurveyStageData };
