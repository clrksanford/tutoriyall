import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
  _handleAuth() {
    axios.get('http://github.com/login/oauth/authorize?client_id=c9c5de80187d1a59d01e&client_secret=539bf63957bfcc29fda6839908ae0fe235fe39b8')
  }

  render() {
    return(
      <form>
        <h4>Login</h4>
        <button onClick={this._handleAuth.bind(this)}>
          <i className="fa fa-github" aria-hidden="true"></i> Sign in with GitHub
        </button>

        <p>Don't have a GitHub account? <a href="http://github.com">Get one here!</a></p>
      </form>
    );
  }
}

export default Login;
