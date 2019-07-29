import accommodationFormState from './Reducers.AccommodationForm';
import exampleState from './Reducers.Example';
import photoState from './Reducers.Photos';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  exampleState,
  accommodationFormState,
});

export default reducer;
