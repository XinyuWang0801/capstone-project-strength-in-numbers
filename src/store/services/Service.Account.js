import { database } from '../../firebase';

export const createUser = async (user) => {
  const userRef = await database.ref('/users');

  const key = await userRef.push(user).getKey();
  return key;
};

export const getBookedAccommodationsIds = async (user) => {
  let accommodationIds = null; // contains ids of the accommodations the user has booked

  await database.ref('/bookings')
    .orderByChild('userId')
    .equalTo(user)
    .once('value', (snapshot) => {
      accommodationIds = snapshot.val();
    });

  return accommodationIds;
};

export const getBookedAccommodationDetails = async (accommodationIds) => {
  const accommodations = [];

  for (const accommodation of Object.values(accommodationIds)) {
    await database.ref(`/accommodations/${accommodation.accommodationId}`)
      .once('value', (snapshot) => {
        const dates = Object.values(accommodation.dates);
        const details = {
          ...snapshot.val(),
          bookedDates: [dates[0], dates[dates.length - 1]],
        };
        accommodations.push(details);
      });
  }

  return accommodations;
};
