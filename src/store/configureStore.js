import { createStore } from 'redux';
import rootReducer from './rootReducer';

/* eslint-disable no-underscore-dangle */
const configureStore = () => createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
export default configureStore;
