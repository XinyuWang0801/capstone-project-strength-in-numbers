import CMS from './Reducers.CMS';
import accommodationFormState from './Reducers.AccommodationForm';
import bathroomState from './Reducers.Bathrooms';
import bedsState from './Reducers.Beds';
import descriptionState from './Reducers.Description';
import locationState from './Reducers.Location';
import nameState from './Reducers.Name';
import photosState from './Reducers.Photos';
import priceState from './Reducers.Price';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  nameState,
  locationState,
  bedsState,
  CMS,
  accommodationFormState,
  descriptionState,
  photosState,
  priceState,
  bathroomState,
});

export default reducer;
