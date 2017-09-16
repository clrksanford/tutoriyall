import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = class extends React.Component {
  static contextTypes = {
    authenticated: React.PropTypes.bool.isRequired,
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
        )}
      />
    );
  }
};

export default PrivateRoute;
