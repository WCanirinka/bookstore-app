import { actions } from '../actions/index';

const { CREATE_BOOK, REMOVE_BOOK } = actions;

export default (state = {}, { type, book }) => {
  let newState;
  switch (type) {
    case CREATE_BOOK:
      return state.concat(book);
    case REMOVE_BOOK:
      newState = { ...state };
      delete newState[book.id];
      return newState;
    default:
      return state;
  }
};
