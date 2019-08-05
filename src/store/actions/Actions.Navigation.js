export const NAVIGATED_TO_ACCOUNT_INFO = 'NAVIGATED_TO_ACCOUNT_INFO';
export const NAVIGATED_TO_LOGIN = 'NAVIGATED_TO_LOGIN';
export const NAVIGATED_TO_EXPLORE = 'NAVIGATED_TO_EXPLORE';
export const NAVIGATED_TO_SIGN_UP = 'NAVIGATED_TO_SIGN_UP';
export const NAVIGATED_TO_ACCOMMODATION_POSTING = 'NAVIGATED_TO_ACCOMMODATION_POSTING';

export const navigateToLogin = (history) => {
  return (dispatch) => {
    history.push('login');
    dispatch({ type: NAVIGATED_TO_LOGIN });
  };
};

export const navigateToAccountInfo = (history) => {
  return (dispatch) => {
    history.push('account-info');
    dispatch({ type: NAVIGATED_TO_ACCOUNT_INFO });
  };
};

export const navigateToExplore = (history) => {
  return (dispatch) => {
    history.push('explore');
    dispatch({ type: NAVIGATED_TO_EXPLORE });
  };
};


export const navigateToSignUp = (history) => {
  return (dispatch) => {
    history.push('signup');
    dispatch({ type: NAVIGATED_TO_SIGN_UP });
  };
};

export const navigateToHostHome = (history) => {
  return (dispatch) => {
    history.push('accommodation-posting');
    dispatch({ type: NAVIGATED_TO_ACCOMMODATION_POSTING });
  };
};
