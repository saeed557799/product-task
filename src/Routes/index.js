import React from "react";
import {
  Route,
  HashRouter as Router,  // Change BrowserRouter to HashRouter
  Routes,
  Navigate,
} from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import { PanelLayout } from "../components/layout/PanelLayout";
import Dashboard from "../pages/DashboardPages/Dashboard/Dashboard";
import Content from "../pages/DashboardPages/Content/Content";
import Quiz from "../pages/DashboardPages/Quiz/Quiz";
import ContentPaper from "../pages/DashboardPages/Content/ContentPaper/ContentPaper";
import QuizQuestion from "../pages/DashboardPages/QuizQuestion/QuizQuestion";
import ContentSummary from "../pages/DashboardPages/ContentSummary/ContentSummary";

const isAuthenticated = true;

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default function index() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          errorElement={<ErrorPage />}
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <PanelLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/content" element={<Content />} />
          <Route path="/quiz" element={<ContentPaper />} />
          <Route path="/quiz/question" element={<QuizQuestion />} />
          <Route path="/quiz/results" element={<Quiz />} />
          <Route path="/content/summary" element={<ContentSummary />} />
        </Route>
      </Routes>
    </Router>
  );
}
