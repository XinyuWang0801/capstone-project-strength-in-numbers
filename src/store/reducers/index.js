import exampleState from './Reducers.Example';
import locationState from './Reducers.Location';
import CMS from './Reducers.CMS';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  exampleState,
  locationState,
  CMS,
});

export default reducer;
