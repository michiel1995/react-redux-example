import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import rootReducer from './rootReducer';

/* eslint-disable no-underscore-dangle */
const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  if (typeof window === 'undefined') {
    return createStore(rootReducer, applyMiddleware(...middleware));
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  sagaMiddleware.run(sagas);
  return store;
};
/* eslint-enable */
export default configureStore;
