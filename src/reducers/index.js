import { combineReducers } from 'redux';
import books from './book';
import filterReducer from './filter';

const rootReducer = state => {
  const booksReducer = books(state);
  return combineReducers({
    booksReducer,
    filterReducer,
  });
};

export default rootReducer;
