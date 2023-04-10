import styled from "styled-components";
import { Form } from "formik";

const QuestionDateForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const QuestionDateInputsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  gap: 20px;
`;

export { QuestionDateInputsSection, QuestionDateForm };
