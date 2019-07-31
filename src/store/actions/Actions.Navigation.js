export const NAVIGATED_TO_ACCOUNT_INFO = 'NAVIGATED_TO_ACCOUNT_INFO';
export const NAVIGATED_TO_LOGIN = 'NAVIGATED_TO_LOGIN';

export const navigateToLogin = (history) => {
  return async (dispatch) => {
    history.push('login');
    dispatch({ type: NAVIGATED_TO_LOGIN });
  };
};

export const navigateToAccountInfo = (history) => {
  return async (dispatch, getState) => {
    const { accountState: { id } } = getState();

    if (!id) {
      navigateToLogin(history);
    }

    history.push('account-info');
    dispatch({ type: NAVIGATED_TO_ACCOUNT_INFO });
  };
};
