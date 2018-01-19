import { connect } from 'react-redux';
import AppSidebar from './components/AppSidebar';

export const storeKey = 'AppSidebar';

export default connect(
  state => ({
    profile: state[storeKey].user ? state[storeKey].user.profile : undefined,
  }),
)(AppSidebar);

export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
