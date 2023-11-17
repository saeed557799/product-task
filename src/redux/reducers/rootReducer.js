import auth from './duck/authDuck';
import content from './duck/contentDuck';
import quiz from './duck/quizDuck';
import dashboard from './duck/dashboardDuck';
import user from './duck/userDuck';

const rootReducers = {
  auth,
  content,
  quiz,
  dashboard,
  user,
};

export default rootReducers;
