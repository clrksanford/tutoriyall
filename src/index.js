import React from 'react';
import {render} from 'react-dom';
import {Router, Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './routes/App/index.js';
import AddLink from './components/AddLink';
import CreateProfile from './components/CreateProfile';
import Login from './components/Login';
import Profile from './components/Profile';

render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/login' component={Login}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/create' component={CreateProfile}/>
      <Route path='/add_link' component={AddLink}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
