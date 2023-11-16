import Login from '../../Modules/users/auth/login';
import SignUp from '../../Modules/users/auth/signup';
import Content from '../../Modules/users/Content/Content';
import ContentPaper from '../../Modules/users/Content/ContentPaper/ContentPaper';
import ContentSummary from '../../Modules/users/ContentSummary/ContentSummary';
import Dashboard from '../../Modules/users/Dashboard/Dashboard';
import Quiz from '../../Modules/users/Quiz/Quiz';
import QuizQuestion from '../../Modules/users/QuizQuestion/QuizQuestion';

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/content',
    component: Content,
  },
  {
    path: '/quiz',
    component: ContentPaper,
  },
  {
    path: '/quiz/question',
    component: QuizQuestion,
  },
  {
    path: '/quiz/results',
    component: Quiz,
  },
  {
    path: '/content/summary',
    component: ContentSummary,
  },
  {
    path: '/quiz/question',
    component: QuizQuestion,
  },
];

const authRoutes = [
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/login',
    component: Login,
  },
];

export { routes, authRoutes };
