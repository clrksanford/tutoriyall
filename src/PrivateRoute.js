import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends Component {
  static contextTypes = {
    authenticated: propTypes.bool.isRequired,
  };

  render () {
    const { component: Component, ...rest } = this.props;

    return (
      <Route {...rest} render={props => (
        this.context.authenticated
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: props.location,
          }} />
      )} />
    );
  }
}
