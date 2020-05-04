const action = {
  CREATE_BOOK: 'CREATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
};

const createBook = book => ({
  type: action.CREATE_BOOK,
  payload: book,
});

const removeBook = book => ({
  type: action.REMOVE_BOOK,
  payload: book,
});

export default { action, createBook, removeBook };
