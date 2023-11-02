import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import NotFound from '../components/ErrorPage/ErrorPage';
import { PanelLayout } from '../components/layout/PanelLayout';
import Dashboard from '../Modules/users/Dashboard/Dashboard';
import Content from '../Modules/users/Content/Content';
import Quiz from '../Modules/users/Quiz/Quiz';
import ContentPaper from '../Modules/users/Content/ContentPaper/ContentPaper';
import QuizQuestion from '../Modules/users/QuizQuestion/QuizQuestion';
import ContentSummary from '../Modules/users/ContentSummary/ContentSummary';
import Login from '../Modules/users/auth/login';
import SignUp from '../Modules/users/auth/signup';

const isAuthenticated = true;

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to='/dashboard' replace />;
  }
  return children;
};

export default function index() {
  return (
    <Router>
      <Routes>
        {/* Routes with sidebar */}
        <Route
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <PanelLayout />
            </PrivateRoute>
          }
        >
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/content' element={<Content />} />
          <Route path='/quiz' element={<ContentPaper />} />
          <Route path='/quiz/question' element={<QuizQuestion />} />
          <Route path='/quiz/results' element={<Quiz />} />
          <Route path='/content/summary' element={<ContentSummary />} />
        </Route>

        {/* Routes without sidebar */}
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}
