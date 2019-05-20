import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import configureStore from './store/configureStore';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.hydrate(
  <StyleContext.Provider value={{ insertCss: () => {} }}>
    <Provider store={configureStore(window.STORE_DATA)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StyleContext.Provider>,
  document.getElementById('app'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
