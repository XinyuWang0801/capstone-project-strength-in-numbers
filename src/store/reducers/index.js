import accommodationFormState from './Reducers.AccommodationForm';
import exampleState from './Reducers.Example';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  exampleState,
  accommodationFormState,
});

export default reducer;
