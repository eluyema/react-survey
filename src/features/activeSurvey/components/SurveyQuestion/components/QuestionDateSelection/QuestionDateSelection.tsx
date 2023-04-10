import React from "react";
import { Formik, Form } from "formik";
import Select from "@/ui/Select/Select.ui";
import { monthOptions, yearsOptions } from "./constants";
import { getDaysOption } from "./utils";
import Button from "@/ui/Button/Button.ui";
import { QuestionDateForm, QuestionDateInputsSection } from "./QuestionDateSelection.styles";
import * as Yup from "yup";

interface QuestionDateValues {
  day: string;
  month: string;
  year: string;
}

const initialValues: QuestionDateValues = {
  day: "",
  month: "",
  year: "",
};

const validationSchema = Yup.object({
  day: Yup.string().required("Required"),
  month: Yup.string().required("Required"),
  year: Yup.string().required("Required"),
});
interface QuestionDateSelectionProps {
  nextSlug: string;
  onSubmitQuestion: (value: unknown, nextSlug: string) => void;
}

const QuestionDateSelection: React.FC<QuestionDateSelectionProps> = ({
  nextSlug,
  onSubmitQuestion,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const date = new Date(+values.year, +values.month - 1, +values.day);
        console.log("!!!");
        onSubmitQuestion(date, nextSlug);
      }}
    >
      {({ values, isValid, setFieldValue }) => (
        <QuestionDateForm>
          <QuestionDateInputsSection>
            <Select
              options={monthOptions}
              name="month"
              value={values.month}
              placeholder="Month"
              onChange={(e) => {
                const value = e.target.value;
                setFieldValue("month", value);
                setFieldValue("day", "");
              }}
            />
            <Select
              options={values.month ? getDaysOption(values.month) : []}
              name="day"
              value={values.day}
              placeholder="Day"
              disabled={!values.month}
              onChange={(e) => {
                const value = e.target.value;
                setFieldValue("day", value);
              }}
            />
            <Select
              options={yearsOptions}
              name="year"
              value={values.year}
              placeholder="Year"
              onChange={(e) => {
                const value = e.target.value;
                setFieldValue("year", value);
              }}
            />
          </QuestionDateInputsSection>
          <Button fullWidth disabled={!isValid} type="submit" variant="gradient" fontSize="big">
            Next
          </Button>
        </QuestionDateForm>
      )}
    </Formik>
  );
};

export default QuestionDateSelection;
