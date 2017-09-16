import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './App';
import AddLink from './components/AddLink';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
