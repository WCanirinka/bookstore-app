import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="outer-container">
      <nav>
        <h1>Bookstore CMS</h1>
        <span className="book-nav">BOOKS</span>
        <span className="categories-nav">CATEGORIES</span>
      </nav>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
