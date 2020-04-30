import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';

const initialState = {
  books: {},
};

for (let index = 0; index < 3; index += 1) {
  const num = Math.floor(Math.random() * 20);
  initialState.books[num] = {
    id: num,
    title: `Book test ${num}`,
    category: 'Kids',
  };
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
