import React from 'react';
import ReactDOM from 'react-dom';
/*  React-redux */
import { Provider } from 'react-redux';
import { Store } from './store';
/* Contains all the components*/
import App from './routes/App';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
