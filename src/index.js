import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const initialState = {
  books: {
    1: {
      id: 1,
      title: 'The Little Prince',
      category: 'Kids',
    },
    2: {
      id: 2,
      title: 'Fundamental Calculus',
      category: 'Learning',
    },
    3: {
      id: 3,
      title: 'It',
      category: 'Horror',
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
