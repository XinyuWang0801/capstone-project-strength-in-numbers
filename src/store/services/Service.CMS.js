import { database } from '../../firebase';

export const getCMSContent = async () => {
  let CMS = {};

  await database.ref('/CMS').once('value', (snapshot) => {
    CMS = snapshot.val();
  });

  return CMS;
};
