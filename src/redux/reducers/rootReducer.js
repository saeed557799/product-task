import auth from './duck/authDuck';
import content from './duck/contentDuck';
import quiz from './duck/quizDuck';
import dashboard from './duck/dashboardDuck';

const rootReducers = {
  auth,
  content,
  quiz,
  dashboard,
};

export default rootReducers;
