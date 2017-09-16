import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Search from './Search';
import Settings from './Settings';
import Paper from 'material-ui/Paper';
import ResourceList from './ResourceList';
import FontIcon from 'material-ui/FontIcon';
import resources from '../../seeds/resources.json';

import API_LINK from '../../constants.js';

const style = {
  height: 'auto',
  width: '90%',
  textAlign: 'center',
  marginLeft: '5%',
  marginTop: '2%',
  display: 'inline-block',
};

class App extends Component {
  componentDidMount() {
    // TODO: get user ID and retrieve all their tutorials
    // axios.get(API_LINK)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Home"
            iconClassNameRight={ <FontIcon className="material-icons">person</FontIcon>}
            style={{float: 'left'}}
          >
            <Search style={{ float: 'left', padding: 0, }}/>
            <Settings/>
          </AppBar>
          <Paper style={style} zDepth={3}>
            <ResourceList resources={resources}/>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
