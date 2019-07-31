import * as Services from '../services';

export const USER_CREATED = 'USER_CREATED';

export const createUser = (user) => {
  return async (dispatch) => {
    const id = await Services.createUser(user);
    dispatch({ type: USER_CREATED, payload: id });
  };
};
