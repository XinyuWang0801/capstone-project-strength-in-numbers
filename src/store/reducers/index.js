import CMS from './Reducers.CMS';
import accommodationFormState from './Reducers.AccommodationForm';
import accountState from './Reducers.Account';
import bathroomState from './Reducers.Bathrooms';
import bedsState from './Reducers.Beds';
import descriptionState from './Reducers.Description';
import exploreState from './Reducers.Explore';
import locationState from './Reducers.Location';
import nameState from './Reducers.Name';
import photosState from './Reducers.Photos';
import priceState from './Reducers.Price';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  accountState,
  nameState,
  locationState,
  exploreState,
  bedsState,
  CMS,
  accommodationFormState,
  descriptionState,
  photosState,
  priceState,
  bathroomState,
});

export default reducer;
