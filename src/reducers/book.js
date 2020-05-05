import actions from '../actions/index';

const { action } = actions;
const { CREATE_BOOK, REMOVE_BOOK } = action;

const booksReducer = initialState => (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state, books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state, books: state.books.filter(book => book.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default booksReducer;
