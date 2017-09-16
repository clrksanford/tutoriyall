import React, { Component } from 'react';

// components
import AddLink from './components/AddLink';
import CreateProfile from './components/CreateProfile';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tutorial Point</h2>
          <AddLink/>
          <CreateProfile/>
          <Search/>
        </div>
      </div>
    );
  }
}

export default App;
