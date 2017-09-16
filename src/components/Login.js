import React, {Component} from 'react';

class Login extends Component {
  render() {
    return(
      <form>
        <h4>Login</h4>
        <button><i className="fa fa-github" aria-hidden="true"></i> Sign in with GitHub</button>

        <p>Don't have a GitHub account? <a href="http://github.com">Get one here!</a></p>
      </form>
    );
  }
}

export default Login;
