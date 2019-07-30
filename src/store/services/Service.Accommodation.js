import { database } from '../../firebase';

export const getAccommodationModel = async () => {
  let accommodationModel = null;

  await database.ref('/accommodation').once('value', (snapshot) => {
    accommodationModel = snapshot.val();
  });

  return accommodationModel;
};

export const updateAccommodationModel = async (model) => {
  const accommodationRef = await database.ref('/accommodations');

  // eslint-disable-next-line no-unused-vars
  const key = await accommodationRef.push(model).getKey();
};

// export const createNewEntryInDB = async () => {
//   const indexRef = database.ref().child('accommodations').push();
//   indexRef.set({ id: indexRef.key() });
// };
