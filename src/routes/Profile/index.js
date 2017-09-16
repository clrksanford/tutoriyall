import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Search from '../SharedComponents/Search';
import Settings from '../SharedComponents/Settings';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const style = {
  height: 'auto',
  width: '90%',
  textAlign: 'center',
  marginLeft: '5%',
  marginTop: '2%',
  display: 'inline-block',
};

class App extends Component {
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
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
