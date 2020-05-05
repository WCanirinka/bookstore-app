import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <div className="book-info">
    <div>
      <span className="book-category">{book.category}</span>
      <span className="book-title">{book.title}</span>
      <span className="book-id">{`Book ID: ${book.id}`}</span>
    </div>
    <button type="button" onClick={() => removeBook(book)}>
      <span>Remove Book</span>
    </button>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
