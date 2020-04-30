import { combineReducers } from 'redux';
import bookReducer from './book';

const rootReducer = state => {
  const bookReducers = bookReducer(state);
  return combineReducers({
    bookReducers,
  });
};

export default rootReducer;
