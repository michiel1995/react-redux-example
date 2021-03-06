import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import rootReducer from './rootReducer';

/* eslint-disable no-underscore-dangle */
const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore);

  const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  sagaMiddleware.run(sagas);
  return store;
};
/* eslint-enable */
export default configureStore;
