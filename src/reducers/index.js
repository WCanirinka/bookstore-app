import { combineReducers } from 'redux';
import bookReducer from './book';

export default combineReducers({ bookReducer });
/*
const rootReducer = state => {
  const bookReducers = bookReducer(state);
  return combineReducers({
    bookReducers,
  });
};

export default rootReducer;
*/
