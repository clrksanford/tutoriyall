import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import API_LINK from '../constants.js';

class Login extends Component {

  static contextTypes = {
    is_authenticated: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired
  }

  componentWillMount(){
    let code = window.location.search.substring(1).split('=')[1]
    let api_link = API_LINK + '/login';
    axios.post(api_link, {code:code})
      .then((data) => {
        console.log(data)
        this.context.is_authenticated()
      })
      .catch((error) => {
        console.log(error);
        if(error == 'Error: Network Error'){
          this.context.is_authenticated()
        }
      });
  }

  render() {
    return (
      this.context.authenticated?<Redirect to={{
      pathname: '/profile'}}/>:null
    );
  }
}

export default Login;
