import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';

// const initialState = {
//   books: {},
// };

// for (let index = 0; index < 3; index += 1) {
//   const num = Math.floor(Math.random() * 20);
//   initialState.books[num] = {
//     id: num,
//     title: `Book test ${num}`,
//     category: 'Kids',
//   };
// }

const initialState = {
  books: [
    { id: Math.floor(Math.random() * 20), title: 'Title 1', category: 'Kids' },
    { id: Math.floor(Math.random() * 20), title: 'Title 2', category: 'Action' },
    { id: Math.floor(Math.random() * 20), title: 'Title 3', category: 'Learning' },
  ],
};

const store = createStore(rootReducer(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
