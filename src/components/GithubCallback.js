import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import API_LINK from '../constants.js';

class Login extends Component {

  static contextTypes = {
    set_userinfo: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired,
    user_id: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string.isRequired
  }

  componentWillMount(){
    let code = window.location.search.substring(1).split('=')[1]
    let api_link = API_LINK + '/login';
    axios.post(api_link, {code:code}, {crossDomain: true, xhrFields: { withCredentials: true }})
      .then((resp) => {
        console.log(resp)
        this.context.set_userinfo(resp.data)
      })
      .catch((error) => {
        console.log(error);
        if(error == 'Error: Network Error'){
          this.props.history.push("/");
        }
      });
  }

  render() {
    return (
      this.context.authenticated?<Redirect to={{
      pathname: '/profile/'+ this.context.user_id}}/>:<div>Logging in...</div>
    );
  }
}

export default Login;
