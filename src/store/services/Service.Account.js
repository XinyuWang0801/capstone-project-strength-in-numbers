import { database } from '../../firebase';

const rounds = 10;
const bcrypt = require('bcryptjs');

export const createUser = async (user) => {
  const nPassword = bcrypt.hashSync(user.password, bcrypt.genSaltSync(rounds));
  const nUser = {
    ...user,
    password: nPassword,
  };

  const userRef = await database.ref('/users');

  const key = await userRef.push(nUser).getKey();
  return key;
};

export const getBookedAccommodationsIds = async (user) => {
  let accommodationIds = []; // contains ids of the accommodations the user has booked

  await database.ref('/bookings')
    .orderByChild('userId')
    .equalTo(user)
    .once('value', (snapshot) => {
      if (snapshot.val()) {
        accommodationIds = snapshot.val();
      }
    });

  return accommodationIds;
};

export const getBookedAccommodationDetails = async (accommodationIds) => {
  if (accommodationIds.length === 0) { return []; }

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

export const verifyUser = async (user) => {
  let res = false;
  let userId = null;
  await database.ref('/users')
    .orderByChild('email')
    .equalTo(user.username)
    .once('value', (snapshot) => {
      if (snapshot.val()) {
        res = bcrypt.compareSync(user.password, Object.values(snapshot.val())[0].password);
        userId = res ? Object.keys(snapshot.val())[0] : null;
      }
    });
  return res ? userId : '';
};
