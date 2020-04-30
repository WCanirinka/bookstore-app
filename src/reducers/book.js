import actions from '../actions/index';

const { CREATE_BOOK, REMOVE_BOOK } = actions;

export default function bookReducer(state = 1, action) {
  let newState;
  switch (action.type) {
    case CREATE_BOOK:
      return state.concat(action.book);
    case REMOVE_BOOK:
      newState = { ...state };
      delete newState[action.book.id];
      return newState;
    default:
      return state;
  }
}
/*
const bookReducer = initialState => (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_BOOK:
      return state.concat(action.book);
    case REMOVE_BOOK:
      newState = { ...state };
      delete newState[action.book.id];
      return newState;
    default:
      return state;
  }
};
export default bookReducer;
*/
