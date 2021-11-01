import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {AppProvider} from '@shopify/polaris'
import store from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <head>
    <link
      rel="stylesheet"
      href="https://unpkg.com/@shopify/polaris@7.2.0/build/esm/styles.css"
    />
    </head>
    
    <Provider store={store}>
      <AppProvider><App /></AppProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
