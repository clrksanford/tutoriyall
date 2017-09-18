import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    showLogin: true,
  };

  handleLogin = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Clicked!');
    var data = { client_id: 'f0b1154c4fee8a085f15' };
    axios.post('https://github.com/login/oauth/authorize?client_id=f0b1154c4fee8a085f15', data)
      .then((res) => {
        this.props.handleLogin(res.data.username);
      })
      .catch((err) => {
        if (err.response) {
          this.setState({ errorMessage: err.response.data.message });
        }
      });
  }

  render() {
    return (
      <form>
        <h4>Login</h4>
        {/*
        <button onClick={this.handleLogin}>
          <i className="fa fa-github" aria-hidden="true" /> Sign in with GitHub
        </button>
        */}
        <a href="https://github.com/login/oauth/authorize?client_id=f0b1154c4fee8a085f15">Click here to begin!</a>
        <p>Don't have a GitHub account? <a href="http://github.com">Get one here!</a></p>
      </form>
    );
  }
}
