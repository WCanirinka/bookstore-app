import { actions } from '../actions/index';

const { CREATE_BOOK, REMOVE_BOOK } = actions;

/*
const initialState = {

};
*/

export default (state = {}, { type, payload }) => {
  switch (type) {

    case CREATE_BOOK:
    case REMOVE_BOOK:

    default:
      return state;
  }
};
