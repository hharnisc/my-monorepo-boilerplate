import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from 'my-monorepo-boilerplate-store'
import App from './components/App'

// create the store and dispatch an APP_INIT action
const store = createStore();
store.dispatch({
  type: 'APP_INIT',
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
