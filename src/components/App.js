import React from 'react';
import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
