import React, { Component } from 'react';
import propTypes from 'prop-types';

const profileStyle = {
  position: 'fixed',
  left: '0px',
  top: '60px',
  float: 'left',
  backgroundColor: '#6f7175',
  width: '20%',
  height: '100%',
  boxSizing: 'border-box',
  paddingTop: '3%',
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
  color: '#D1D2D4',
};
const avatarStyle = {
  marginTop: '5%',
  borderRadius: '50%',
  width: '150px',
};

export default class Profile extends Component {
  static contextTypes = {
    username: propTypes.string.isRequired,
    avatar_url: propTypes.string.isRequired
  }

  render() {
    return (
      <div style={profileStyle}>
        <div>User Profile</div>
        <img
          alt="avatar"
          src={this.context.avatar_url}
          style={avatarStyle}
        />
        <h4>{this.context.username}</h4>
      </div>
    );
  }
}
