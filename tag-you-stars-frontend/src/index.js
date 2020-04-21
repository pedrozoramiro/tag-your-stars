import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import configureStore from './configuration/store'
import './styles/index.css';
import App from './modules/App';
import * as serviceWorker from './serviceWorker';

function renderApp(store) {
  ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
    </Provider>,
    document.getElementById('root')
  )
}
function startApp() {
  const store = configureStore();
  serviceWorker.unregister();
  renderApp(store);
}

startApp();