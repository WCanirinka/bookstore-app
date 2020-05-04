import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';

const initialState = {
  books: [
    { id: Math.floor(Math.random() * 30).toString(), title: 'Title 1', category: 'Kids' },
    { id: Math.floor(Math.random() * 30).toString(), title: 'Title 2', category: 'Action' },
    { id: Math.floor(Math.random() * 30).toString(), title: 'Title 3', category: 'Learning' },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
