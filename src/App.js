import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import RegisterPageContainer from './containers/RegisterPage';
import ShopPage from './pages/shop';
import HomePage from './pages/home';

import configureStore from './store/configureStore';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={RegisterPageContainer} />
        <Route path="/shop" exact component={ShopPage} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
