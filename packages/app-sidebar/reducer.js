export const actionTypes = {
  FETCH_USER_START: 'FETCH_USER_START',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAIL: 'FETCH_USER_FAIL',
};

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export default (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_START:
      return {
        ...state,
        ...initialState, // clear user and error states
        loading: true,
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    case actionTypes.FETCH_USER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const actions = {
  fetchUser: () => ({
    type: actionTypes.FETCH_USER_START,
  }),
  fetchUserSuccess: ({ user }) => ({
    type: actionTypes.FETCH_USER_SUCCESS,
    user,
  }),
  fetchUserFail: ({ error }) => ({
    type: actionTypes.FETCH_USER_FAIL,
    error,
  }),
};
