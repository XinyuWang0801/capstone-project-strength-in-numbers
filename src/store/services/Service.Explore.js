export const getAccommodationListings = async (location) => {
  const res = await fetch(`http://localhost:8000/accommodations?location.state=${location}`);
  const accomodations = await res.json();
  return accomodations;
};
