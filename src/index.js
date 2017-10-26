import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

import './assets/css/index.css';
import './assets/css/App.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <HashRouter >
    <App />
  </HashRouter>
), document.getElementById('root'));

registerServiceWorker();
