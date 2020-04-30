import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books }) => {
  const displayBooks = books.length > 0 ? (books.map(book => (
    <Book book={book} key={Math.random() * 20} />
  ))) : null;
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ booksReducer: { books } }) => ({
  books,
});

export default connect(mapStateToProps)(BookList);
