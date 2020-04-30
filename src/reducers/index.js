import { combineReducers } from 'redux';
import bookReducer from './book';

export default combineReducers({ bookReducer });
/*
const rootReducer = state => {
  const booksReducer = books(state);
  return combineReducers({
    booksReducer,
  });
};

export default rootReducer;
*/
