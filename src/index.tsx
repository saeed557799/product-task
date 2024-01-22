import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';
import { persistor, store } from './redux/store/index.tsx';

ReactDOM.render(
  <Auth0Provider
    domain="dev-qs18gs1c2s3emfz2.us.auth0.com"
    clientId="UI6dB8bhbzGoojwt2PZaeoEnvKcS1aCq"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
