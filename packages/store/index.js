import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {
  middleware as appSidebarMiddleware,
} from 'my-monorepo-boilerplate-app-sidebar';
import reducers from './reducers';

export default (initialstate={}) => {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  return createStore(
    reducers,
    initialstate,
    composeEnhancers(
      applyMiddleware(
        appSidebarMiddleware,
      ),
    ),
  );
};
