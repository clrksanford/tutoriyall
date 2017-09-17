import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ContextWrapper extends Component {
  state = {
    user_id: window.localStorage.getItem('user_id'),
    username: window.localStorage.getItem('username'),
    avatar_url: window.localStorage.getItem('avatar_url'),
    authenticated: this.is_authenticated(),
  };

  static childContextTypes = {
    set_userinfo: propTypes.func.isRequired,
    authenticated: propTypes.bool.isRequired,
    user_id: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    avatar_url: propTypes.string.isRequired
  };

  is_authenticated() {
    return window.localStorage.getItem('user_id') > 0;
  }

  getChildContext() {
    return {
      set_userinfo: (userinfo) => {
        // eslint-disable-next-line no-console
        console.log('in context manager');
        // eslint-disable-next-line no-console
        console.log(userinfo);

        const { user_id, username, avatar_url } = userinfo;

        window.localStorage.setItem('user_id', user_id);
        window.localStorage.setItem('username', username);
        window.localStorage.setItem('avatar_url', avatar_url);
        this.setState({
          authenticated: true,
          avatar_url,
          user_id,
          username,
        });
      },
      authenticated: this.state.authenticated,
      user_id: this.state.user_id,
      username: this.state.username,
      avatar_url: this.state.avatar_url,
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
