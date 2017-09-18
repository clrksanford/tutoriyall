import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Search from '../../components/Search';
import Settings from './Settings';
import Paper from 'material-ui/Paper';
import ResourceList from './ResourceList';
import FontIcon from 'material-ui/FontIcon';
import Addlink from '../../components/AddLink';
import Profile from '../../components/Profile';
// import resources from '../../seeds/resources.json';
import axios from 'axios';
import propTypes from 'prop-types';

import { API_LINK } from '../../constants.js';

const paperStyle = {
  width: '75%',
  marginTop: '100px',
  float: 'right',
  boxShadow: 'none',
};
const appBarStyle = {
  position: 'fixed',
  left: '0px',
  top: '0px',
  boxSizing: 'border-box',
  paddingTop: '1%',
  backgroundColor: '#23b567',
};
const searchStyle = {
  float: 'left',
  padding: 0,
};

export default class App extends Component {
  static contextTypes = {
    user_id: propTypes.string.isRequired,
  }

  state = {
    resources: [],
  };

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('component mounting');
    // TODO: get user ID and retrieve all their tutorials
    const user_id = this._getUserId();
    const api_url = API_LINK + '/links/' + user_id;
    axios.get(api_url).then(response => {
      this.setState({ resources: response.data });
    });
  }

  _getUserId () {
    return this.props.match.params.user_id || this.context.user_id;
  }

  _addNewLink = (link) => {
    // eslint-disable-next-line no-console
    console.log('adding new link', link);
    const { resources } = this.state;

    resources.push(link);

    this.setState({ resources });
  };

  _renderOthersLinks = (link) => {
    // eslint-disable-next-line no-console
    console.log(link);
  };

  render() {
    const user_id = this._getUserId();
    const iconClassNameRight = (
      <FontIcon className="material-icons">person</FontIcon>
    );

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Tutori Y'all"
            iconClassNameRight={iconClassNameRight}
            style={appBarStyle}
          >
            <Search
              style={searchStyle}
              userId={user_id}
              renderOthersLinks={this._renderOthersLinks}
            />
            <Settings/>
          </AppBar>

          <Paper style={paperStyle} zDepth={3}>
            <Profile/>
            <Addlink userId={user_id} addNewLink={this._addNewLink} />
            <ResourceList resources={this.state.resources}/>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}
