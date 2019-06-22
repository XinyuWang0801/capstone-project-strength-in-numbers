import exampleState from './Reducers.Example';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  exampleState,
});

export default reducer;
