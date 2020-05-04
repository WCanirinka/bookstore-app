import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import actions from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const { removeBook, changeFilter } = actions;

const BookList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const handleRemoveBook = book => removeBook(book);

  const filteredBooks = filter === 'All' ? books : books.filter(book => book.category === filter);

  const handleFilterChange = filter => changeFilter(filter);

  const displayBooks = filteredBooks.length > 0 ? (filteredBooks.map(book => (
    <Book book={book} key={Math.random() * 20} removeBook={handleRemoveBook} />
  ))) : null;


  return (
    <div>
      <CategoryFilter changeFilter={handleFilterChange} />
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
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

BookList.defaultProps = {
  removeBook: () => null,
  changeFilter: () => null,
};

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const mapStateToProps = ({ booksReducer: { books }, filterReducer: filter }) => ({
  books,
  filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
