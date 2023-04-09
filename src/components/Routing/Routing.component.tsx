import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GenderQuestionScena from "@/scenes/RelationshipsWithAstrology/GenderQuestion/GenderQuestion.scena";

const Routing = () => {
  const baseSurvey = "/surveys/relationships-with-astrology/gender-question";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/surveys">
          <Route path="relationships-with-astrology">
            <Route path="gender-question">
              <Route index element={<GenderQuestionScena />} />
              <Route path="*" element={<Navigate to={baseSurvey} replace />} />
            </Route>
            <Route path="*" element={<Navigate to={baseSurvey} replace />} />
          </Route>
          <Route path="*" element={<Navigate to={baseSurvey} replace />} />
        </Route>
        <Route path="*" element={<Navigate to={baseSurvey} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
