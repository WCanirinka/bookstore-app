import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import categories from '../helper/bookCategory';

const { createBook } = actions;

class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.createBook = actions;

    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  reset() {
    this.setState({
      title: '',
      category: '',
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    const { title, category } = this.state;
    const book = {
      id: Math.floor(Math.random() * 30),
      title,
      category,
    };
    createBook(book);
    this.reset();
  }

  render() {
    return (
      <div className="book-form-container">
        <h3>ADD NEW BOOK</h3>
        <form onSubmit={this.handleSubmit}>
          <input className="book-input" type="text" placeholder="Title" name="title" onChange={this.handleChange} />
          <select name="category" onChange={this.handleChange}>
            <option disabled>
              Select Category
            </option>
            {categories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <input className="submit-btn" type="submit" value="Add Book" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

BooksForm.defaultProps = {
  createBook: () => null,
};

export default connect(null, mapDispatchToProps)(BooksForm);
