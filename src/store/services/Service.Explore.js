import { database } from '../../firebase';

// query is of type:
// location: { state, country, city }
// guests: some number
// nights: looks for rooms that are available
export const getAccommodationListings = async (query) => {
  const { administrativeRegion, country, city } = query;
  let iAccommodations = null;

  // firebase doesn't allow multiple filters...
  await database.ref('/accommodations')
    .orderByChild('location/country')
    .equalTo(country)
    .once('value', (snapshot) => {
      iAccommodations = snapshot.val();
    });

  let accommodations = Object.values(iAccommodations);
  accommodations = Object.keys(iAccommodations).map((item, index) => ({ id: item, ...accommodations[index] }));
  accommodations = accommodations.filter(((accommodation) => {
    return accommodation.location.state === administrativeRegion && accommodation.location.city === city;
  }));

  return accommodations;
};
