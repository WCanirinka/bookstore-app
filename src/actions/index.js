const actions = {
  REMOVE_BOOK: 'REMOVE BOOK',
  CREATE_BOOK: 'CREATE BOOK',
};

const removeBook = book => ({
  type: actions.REMOVE_BOOK,
  payload: book,
});

const createBook = book => ({
  type: actions.CREATE_BOOK,
  payload: book,
});


export default { actions, removeBook, createBook };
