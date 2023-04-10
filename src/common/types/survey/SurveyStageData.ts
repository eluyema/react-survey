interface SurveyStageData {
  stageId: string;
  slug: string;
  necessaryAttributes: string[];
  modifiableAttributes: string[];
  possibleParentStages: string[];
  text: string;
  nextSlug?: string;
  footerText?: string | string[];
}

export type { SurveyStageData };
