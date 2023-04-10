import { SurveyStageData } from "@/common/types/survey/SurveyStageData";
import React from "react";
import SurveyContainer from "../SurveyContainer/SurveyContainer.feature";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  SurveySendResultContainer,
  SurveySendResultErrorLabel,
  SurveySendResultInputBlock,
  SurveySendResultSubmitWrapper,
  SurveySendResultText,
} from "./SurveySendResult.styles";
import { Input } from "@/ui/Input/Input.ui";
import Button from "@/ui/Button/Button.ui";
import SendResultPolicy from "./components/SendResultPolicy/SendResultPolicy";
import { surveyStagesToResult } from "@/utils/mapper/surveyStagesToResult.mapper";
import { useSelector } from "react-redux";
import { RootState } from "@/providers/ReduxProvider/rootReducer";

interface SurveySendResultProps {
  stageData: SurveyStageData;
  initSlug: string;
  basepath: string;
}

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Email must be correct").required("Required"),
});

const SurveySendResult: React.FC<SurveySendResultProps> = ({ stageData, initSlug, basepath }) => {
  const { footerText, text } = stageData;

  const passedStages = useSelector((state: RootState) => state.activeSurvey.passedStages);

  return (
    <SurveyContainer initSlug={initSlug} basepath={basepath} footerText={footerText}>
      <SurveySendResultContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const result = JSON.stringify(surveyStagesToResult(passedStages));
            const successString = `🤖 Bib Bob Bub!\nYour plan has been successfully sent to ${values.email}. 🚀\nYour answers:\n`;
            alert(successString + result);
          }}
        >
          {({ errors, touched, isValid, getFieldProps }) => (
            <Form>
              <SurveySendResultText>{text}</SurveySendResultText>
              <SurveySendResultInputBlock>
                <Input fullWidth placeholder="Email" {...getFieldProps("email")} />
                {errors.email && touched.email && (
                  <SurveySendResultErrorLabel>{errors.email}</SurveySendResultErrorLabel>
                )}
              </SurveySendResultInputBlock>
              <SendResultPolicy />
              <SurveySendResultSubmitWrapper>
                <Button disabled={!isValid} fullWidth variant="gradient" fontSize="big">
                  Continue
                </Button>
              </SurveySendResultSubmitWrapper>
            </Form>
          )}
        </Formik>
      </SurveySendResultContainer>
    </SurveyContainer>
  );
};

export default SurveySendResult;
