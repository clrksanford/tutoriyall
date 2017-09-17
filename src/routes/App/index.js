import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Search from '../../components/Search';
import Settings from './Settings';
import Paper from 'material-ui/Paper';
import ResourceList from './ResourceList';
import FontIcon from 'material-ui/FontIcon';
import Addlink from '../../components/AddLink'
import Profile from '../../components/Profile'
import resources from '../../seeds/resources.json';
import axios from 'axios';

import API_LINK from '../../constants.js';

const style = {
  width: '90%',
  textAlign: 'center',
  marginLeft: '5%',
  marginTop: '2%',
  display: 'inline-block',
  boxShadow: 'none',
};

class App extends Component {
  static contextTypes = {
    set_userinfo: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired,
    user_id: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string.isRequired
  }

  constructor() {
    super();

    this.state = {
      resources: []
    }

    this._addNewLink = this._addNewLink.bind(this);
    this._renderOthersLinks = this._renderOthersLinks.bind(this);
  }

  componentDidMount() {
    console.log('component mounting');
    // TODO: get user ID and retrieve all their tutorials
    var user_id = this.props.match.params.user_id || this.context.user_id
    var api_url = API_LINK + '/links/' + user_id
    axios.get(api_url).then(response => {
      let resources = response.data;

      this.setState({resources: resources});
    });
  }

  _addNewLink(link) {
    console.log('adding new link', link);
    let {resources} = this.state;

    resources.push(link);

    this.setState({resources});
  }

  _renderOthersLinks(link) {
    console.log(link);
  }

  render() {
    var user_id = this.props.match.params.user_id || this.context.user_id;

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Tutori Y'all"
            iconClassNameRight={ <FontIcon className="material-icons">person</FontIcon>}
            style={{float: 'left', backgroundColor: '#23b567'}}
          >
            <Search style={{ float: 'left', padding: 0, }} userId={user_id}
              renderOthersLinks={this._renderOthersLinks}
            />
            <Settings/>
          </AppBar>

          <Paper style={style} zDepth={3}>
            <Profile/>
            <Addlink userId={user_id} addNewLink={this._addNewLink} />
            <ResourceList resources={this.state.resources}/>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
