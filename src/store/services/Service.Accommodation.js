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

  await accommodationRef.push(model).getKey();
};
