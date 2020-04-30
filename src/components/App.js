import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

export default function App() {
  return (
    <div>
      <BooksForm />
      <BooksList />
    </div>
  );
}
