import { database } from '../../firebase';

export const createUser = async (user) => {
  const userRef = await database.ref('/users');

  const key = await userRef.push(user).getKey();
  return key;
};
