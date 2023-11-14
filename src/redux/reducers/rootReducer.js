import auth from './duck/authDuck';
import content from './duck/contentDuck';
import quiz from './duck/quizDuck';

const rootReducers = {
  auth,
  content,
  quiz,
};

export default rootReducers;
