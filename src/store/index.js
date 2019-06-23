import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, /* preloadedState, */
  composeWithDevTools(
    applyMiddleware(thunk),
  ));

export default store;
