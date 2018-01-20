import fetch from 'isomorphic-fetch';
import {
  actionTypes,
  actions,
} from './reducer';

export default ({ dispatch }) => next => async action => {
  next(action);
  switch (action.type) {
    case 'APP_INIT':
      dispatch(actions.fetchUser());
      break;
    case actionTypes.FETCH_USER_START:
      try {
        const response = await fetch('/api/user');
        const user = await response.json();
        dispatch(actions.fetchUserSuccess({ user }));
      } catch (error) {
        dispatch(actions.fetchUserFail({ error: error.message }));
      }
      break;
    default:
      break;
  }
};
