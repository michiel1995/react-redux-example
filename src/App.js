import React from 'react';
import { Provider } from 'react-redux';
import Register from './pages/register';
import configureStore from './store/configureStore';

function App() {
  return (
    <Provider store={configureStore()}>
      <Register />
    </Provider>
  );
}

export default App;
