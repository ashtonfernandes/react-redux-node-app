import React from 'react';
import ReactDOM from 'react-dom';
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
    <Provider store={store}>
      <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
