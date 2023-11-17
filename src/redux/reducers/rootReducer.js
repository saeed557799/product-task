import auth from './duck/authDuck';
import content from './duck/contentDuck';
import quiz from './duck/quizDuck';
import dashboard from './duck/dashboardDuck';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducers = combineReducers({
  auth,
  content,
  quiz,
  dashboard,
});

export default rootReducers;
