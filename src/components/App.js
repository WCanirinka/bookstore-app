import React from 'react';
import PropTypes from 'prop-types';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

class App extends React.Component {
  componentDidMount() {
    // const { store } = this.context;
  }

  render() {
    const { store } = this.context;
    console.log(store);
    return (
      <div>
        <BooksForm />
        <BooksList />
      </div>
    );
  }
}

export default App;
