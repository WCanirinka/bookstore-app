import React from 'react';

export default function BooksForm() {
  const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input placeholder="Book name" className="book-title" />
      <select>
        { options.map(bookOption => <option key={bookOption}>{bookOption}</option>) }
      </select>
      <submit>Create book</submit>
    </form>
  );
}
