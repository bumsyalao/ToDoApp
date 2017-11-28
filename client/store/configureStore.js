import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';


const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      getMiddleware(),
      window.devToolsExtension? window.devToolsExtension() : (empty) => empty
    )
  );
}

const getMiddleware = () => {
  let logger = createLogger();
  let middleware = applyMiddleware(thunk);

  if (process.ENV !== 'production') {
    middleware = applyMiddleware(thunk, logger);
  }
  return middleware;
}

export default configureStore;