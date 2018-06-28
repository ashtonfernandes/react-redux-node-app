import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/app.css'

addLocaleData(en);
addLocaleData(fr);

const store = configureStore();
const jsx = (
  <BrowserRouter>
    <Provider store={store}>
      <Route component={AppRouter} />
    </Provider>
  </BrowserRouter>  
);

ReactDOM.render(jsx, document.getElementById('root'));
