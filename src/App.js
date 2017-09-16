import React, { Component } from 'react';

// components
import AddLink from './components/AddLink';
import CreateProfile from './components/CreateProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tutorial Point</h2>
          <AddLink/>
          <CreateProfile/>
        </div>
      </div>
    );
  }
}

export default App;
