import database from '../../firebase';

// export const getAccommodationListings = async (location) => {
//   const res = await fetch(`http://localhost:8000/accommodations?location.state=${location}`);
//   const accomodations = await res.json();
//   return accomodations;
// };

// query is of type:
// location: { state, country, city }
// guests: some number
// nights: looks for rooms that are available
export const getAccommodationListings = async (query) => {
  const { location: { state, country, city } } = query;
  const queryString = `?location.state=${state}&location.city=${country}`;
  let accommodations = null;

  await database.ref(`/accommodations${queryString}`).once('value', (snapshot) => {
    accommodations = snapshot.val();
  });

  return accommodations;
};
