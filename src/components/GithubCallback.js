import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  static contextTypes = {
    is_authenticated: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired
  }

  componentWillMount(){
    var code = window.location.search.substring(1).split('=')[1]
    var senddata = {code:code}
    if(true){
      axios.get('https://localhost:4000/login', senddata)
        .then(function (data) {
          console.log(data)
          this.context.is_authenticated()
          this.context.set_userinfo(data)
        })
    } else {
      this.context.is_authenticated()
    }
  }

  render() {
    console.log(this.context)
    return (
      this.context.authenticated?<Redirect to={{
      pathname: '/profile'}}/>:null
    );
  }
}

export default Login;
