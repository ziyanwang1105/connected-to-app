import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import configureStore from './store/store.js'
import { Provider } from 'react-redux'
import { createUser, loginUser, logoutUser } from './store/sessionReducer.js'
import { postUser } from './utils/sessionApiUtils.js'
import { restoreSession } from './utils/csrfUtils.js'

const initializeApp = () => {

  const store = configureStore();

  if (import.meta.env.MODE !== "production") {
    window.store = store;
    window.postUser = postUser
    window.restoreSession = restoreSession
    window.createUser = createUser
    window.loginUser = loginUser
    window.logoutUser = logoutUser
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
};

restoreSession().then(initializeApp)
