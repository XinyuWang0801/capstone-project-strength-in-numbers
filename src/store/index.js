import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer, /* preloadedState, */
//   composeWithDevTools(
//     applyMiddleware(thunk),
//   ));

// const persistor = persistStore(store);

// export default () => {
//   const store = createStore(persistedReducer, /* preloadedState, */
//     composeWithDevTools(
//       applyMiddleware(thunk),
//     ));
//   const persistor = persistStore(store);
//   return { store, persistor };
// };

export const store = createStore(persistedReducer, /* preloadedState, */
  composeWithDevTools(
    applyMiddleware(thunk),
  ));
export const persistor = persistStore(store);
