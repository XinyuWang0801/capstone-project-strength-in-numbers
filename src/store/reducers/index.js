import CMS from './Reducers.CMS';
import bedsState from './Reducers.Beds';
import exampleState from './Reducers.Example';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  exampleState,
  bedsState,
  CMS,
});

export default reducer;
