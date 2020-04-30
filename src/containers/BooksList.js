/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';


export default function BooksList({ books }) {
  const displayBooks = books.length > 0 ? (books.map(book => (
    <Book book={book} key={book.id} />
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
        { displayBooks }
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ booksReducer: { books } }) => ({
  books,
});
connect(mapStateToProps)(BooksList);
