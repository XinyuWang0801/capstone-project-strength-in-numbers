import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['accountState'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, /* preloadedState, */
  composeWithDevTools(
    applyMiddleware(thunk),
  ));
export const persistor = persistStore(store);
