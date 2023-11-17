import { combineReducers } from '@reduxjs/toolkit';
import auth from './duck/authDuck';
import content from './duck/contentDuck';
import quiz from './duck/quizDuck';
import dashboard from './duck/dashboardDuck';
import user from './duck/userDuck';
import result from './duck/resultDuck';

const rootReducers = combineReducers({
  auth,
  content,
  quiz,
  dashboard,
  user,
  result,
});

export default rootReducers;
