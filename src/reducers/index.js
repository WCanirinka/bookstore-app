import { combineReducers } from 'redux';
import books from './book';

const rootReducer = combineReducers({
  booksReducer: books,
});

export default rootReducer;
