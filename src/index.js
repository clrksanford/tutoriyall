import React from 'react';
import {render} from 'react-dom';
import {Router, Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './App';
import CreateProfile from './components/CreateProfile';
import Login from './components/Login';
import Profile from './components/Profile';
import GithubCallback from './components/GithubCallback.js'
import PrivateRoute from './components/PrivateRoute'
import ContextWrapper from './ContextWrapper';

render(
  <BrowserRouter>
    <ContextWrapper>
      <Route exact path='/' component={App}/>
      <Route path='/login' component={Login}/>
      <Route path='/github_callback' component={GithubCallback}/>
      <PrivateRoute path='/profile' component={Profile}/>
      <PrivateRoute path='/create' component={CreateProfile}/>
    </ContextWrapper>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
