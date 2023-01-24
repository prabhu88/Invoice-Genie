// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import isDev from 'electron-is-dev';

// Root Reducer
import rootReducer from '../reducers';

// 3rd Party MWs
import Logger from 'redux-logger';

// Custom Middleware

// Default Middlewares
const middlewares = [];

// Dev Mode Middlewares
if (isDev) {
  //middlewares.unshift(MeasureMW);
  middlewares.push(Logger);
}

// Redux Devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}