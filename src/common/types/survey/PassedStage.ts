interface PassedSurveyStage {
  stageId: string;
  slug: string;
  isQuestion: boolean;
  modifiedAttributes: string[];
  value?: unknown;
}

export type { PassedSurveyStage };
