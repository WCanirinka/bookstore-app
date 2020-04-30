import { combineReducers } from 'redux';
import books from './book';

const rootReducer = state => {
  const booksReducer = books(state);
  return combineReducers({
    booksReducer,
  });
};

export default rootReducer;