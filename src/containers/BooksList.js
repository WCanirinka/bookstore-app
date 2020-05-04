import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import actions from '../actions/index';

const { removeBook } = actions;

const BookList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  const displayBooks = books.length > 0 ? (books.map(book => (
    <Book book={book} key={Math.random() * 20} removeBook={handleRemoveBook} />
  ))) : null;

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>
        {displayBooks}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func,
};

BookList.defaultProps = {
  removeBook: () => null,
};

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

const mapStateToProps = ({ booksReducer: { books } }) => ({
  books,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
