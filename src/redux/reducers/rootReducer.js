import auth from './duck/authDuck';
import content from './duck/contentDuck';
import quiz from './duck/quizDuck';
import dashboard from './duck/dashboardDuck';
import { combineReducers } from '@reduxjs/toolkit';
import user from './duck/userDuck';

const rootReducers = combineReducers({
  auth,
  content,
  quiz,
  dashboard,
  user,
});

export default rootReducers;
