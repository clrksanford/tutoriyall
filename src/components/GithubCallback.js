import React, { Component } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { API_LINK } from '../constants.js';

export default class Login extends Component {
  static contextTypes = {
    set_userinfo: propTypes.func.isRequired,
    authenticated: propTypes.bool.isRequired,
    user_id: propTypes.string.isRequired,
  }

  componentWillMount() {
    const code = window.location.search.substring(1).split('=')[1];
    const api_link = `${API_LINK}/login`;

    axios.post(api_link, { code }, {
      crossDomain: true,
      xhrFields: {
        withCredentials: true,
      },
    })
      .then((resp) => {
        // eslint-disable-next-line no-console
        console.log(resp);
        this.context.set_userinfo(resp.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        if (error === 'Error: Network Error') {
          this.props.history.push('/');
        }
      });
  }

  render() {
    return (
      this.context.authenticated
        ? <Redirect to={{
          // TODO: Change this to `/profile/${this.context.user_id}` when ready
          pathname: '/'
        }} />
        : <div>Logging in...</div>
    );
  }
}
