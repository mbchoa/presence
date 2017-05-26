import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from '../redux/configureStore';
import { checkAuth } from '../redux/actions';

import App from './app';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept('./app', () => { render(); });
}

store.dispatch(checkAuth()).then(() => {
  render();
});
