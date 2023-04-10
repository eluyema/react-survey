import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GenderQuestionScena from "@/scenes/RelationshipsWithAstrology/GenderQuestion/GenderQuestion.scena";
import DateOfBirthQuestion from "@/scenes/RelationshipsWithAstrology/DateOfBirthQuestion/DateOfBirthQuestion.scena";
import IsSingleQuestion from "@/scenes/RelationshipsWithAstrology/IsSingleQuestion/IsSingleQuestion.scena";
import IsSingleParentQuestion from "@/scenes/RelationshipsWithAstrology/IsSingleParentQuestion/IsSingleParentQuestion.scena";
import IsParentQuestion from "@/scenes/RelationshipsWithAstrology/IsParentQuestion/IsParentQuestion.scena";
import SingleProblemQuestion from "@/scenes/RelationshipsWithAstrology/SingleProblemQuestion/SingleProblemQuestion.scena";
import RelationshipProblemQuestion from "@/scenes/RelationshipsWithAstrology/RelationshipProblemQuestion/RelationshipProblemQuestion.scena";
import MakeDecisionsQuestion from "@/scenes/RelationshipsWithAstrology/MakeDecisionsQuestion/MakeDecisionsQuestion.scena";
import RelationshipWithHead from "@/scenes/RelationshipsWithAstrology/RelationshipWithHead/RelationshipWithHead.scena";
import RelationshipWithHeart from "@/scenes/RelationshipsWithAstrology/RelationshipWithHeart/RelationshipWithHeart.scena";
import RelationshipWithBoth from "@/scenes/RelationshipsWithAstrology/RelationshipWithBoth/RelationshipWithBoth.scena";
import SendGaidancePlan from "@/scenes/RelationshipsWithAstrology/SendGaidancePlan/SendGaidancePlan.scena";
import { slugs } from "@/common/constants/slugs.contant";

const Routing = () => {
  const baseSurvey = "/surveys/relationships-with-astrology/";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/surveys">
          <Route path="relationships-with-astrology">
            <Route index element={<GenderQuestionScena />} />
            <Route
              path={slugs.relationshipsWithAstrology.dateOfBirth}
              element={<DateOfBirthQuestion />}
            />
            <Route
              path={slugs.relationshipsWithAstrology.isSingle}
              element={<IsSingleQuestion />}
            />

            <Route
              path={slugs.relationshipsWithAstrology.isSingleParent}
              element={<IsSingleParentQuestion />}
            />
            <Route
              path={slugs.relationshipsWithAstrology.isParent}
              element={<IsParentQuestion />}
            />

            <Route
              path={slugs.relationshipsWithAstrology.relationshipProblem}
              element={<RelationshipProblemQuestion />}
            />
            <Route
              path={slugs.relationshipsWithAstrology.singleProblem}
              element={<SingleProblemQuestion />}
            />

            <Route
              path={slugs.relationshipsWithAstrology.makeDecisions}
              element={<MakeDecisionsQuestion />}
            />

            <Route
              path={slugs.relationshipsWithAstrology.relationshipDecisionWithHead}
              element={<RelationshipWithHead />}
            />
            <Route
              path={slugs.relationshipsWithAstrology.relationshipDecisionWithHeart}
              element={<RelationshipWithHeart />}
            />
            <Route
              path={slugs.relationshipsWithAstrology.relationshipDecisionWithBoth}
              element={<RelationshipWithBoth />}
            />

            <Route
              path={slugs.relationshipsWithAstrology.sendGaidancePlan}
              element={<SendGaidancePlan />}
            />
            {/* <Route path="*" element={<Navigate to={baseSurvey} replace />} /> */}
          </Route>
          {/* <Route path="*" element={<Navigate to={baseSurvey} replace />} /> */}
        </Route>
        {/* <Route path="*" element={<Navigate to={baseSurvey} replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
