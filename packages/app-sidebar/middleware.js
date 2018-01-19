import fetch from 'isomorphic-fetch';
import {
  actionTypes,
  actions,
} from './reducer';

export default ({ dispatch }) => next => async action => {
  next(action);
  switch (action.type) {
    case 'APP_INIT':
      dispatch(action.fetchUser());
      break;
    case actionTypes.FETCH_USER_START:
      try {
        const response = await fetch('/api/user');
        const user = await response.json();
        dispatch(action.fetchUserSuccess({ user }));
      } catch (error) {
        dispatch(action.fetchUserFail({ error }));
      }
      break;
    default:
      break;
  }
};
