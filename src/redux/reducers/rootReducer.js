import auth from './duck/authDuck';
import content from './duck/contentDuck';
import dashboard from './duck/dashboardDuck';

const rootReducers = {
  auth,
  content,
  dashboard,
};

export default rootReducers;
