import { combineReducers } from 'redux';
import {
  reducer as appSidebarReducer,
  storeKey as appSidebarStoreKey
} from 'my-monorepo-boilerplate-app-sidebar';

export default combineReducers({
  [appSidebarStoreKey]: appSidebarReducer,
});
