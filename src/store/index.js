import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer'
// import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
// import sagas from './sagas'

// const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  // applyMiddleware(sagaMiddleware)
);

const store = createStore(
  reducer,
  enhancer
);

// sagaMiddleware.run(sagas)

export default store;