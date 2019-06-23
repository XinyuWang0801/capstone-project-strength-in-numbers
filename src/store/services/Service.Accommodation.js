import database from '../../firebase';

export const getAccommodationModel = async () => {
  let accommodationModel = null;

  await database.ref('/accommodation').once('value', (snapshot) => {
    accommodationModel = snapshot.val();
  });

  return accommodationModel;
};

export const updateAccommodationModel = async (model) => {
  const accommodationRef = await database.ref('/accommodation');
  const prevAccommodationSnapshot = await accommodationRef.once('value');
  const prevAccommodationModel = prevAccommodationSnapshot.val();

  // Docs for PUT / POST:
  // https://firebase.google.com/docs/database/web/read-and-write
  await accommodationRef.set({
    ...prevAccommodationModel,
    ...model,
  });
};
