import React from 'react';
import {render} from 'react-dom';
import {Router, Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './routes/App/index.js';
import Profile from './routes/Profile/index.js';
import registerServiceWorker from './registerServiceWorker';

render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/profile' component={Profile}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
