import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  timer: timerReducer,
});

export default rootReducer;
