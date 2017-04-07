import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import configureStore from '../redux/configureStore';
import Routes from './routes'

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Routes store={ store } />
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept('./routes', () => { render() });

}