import React, {Component} from 'react';

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

class Profile extends Component {
  static contextTypes = {
    set_userinfo: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired,
    user_id: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string.isRequired
  }

  render() {
    return(
      <div style={profileStyle}>
        <div>user profile</div>
        <img src={this.context.avatar_url} style={{marginTop: '5%', borderRadius: '50%',}} width="150px"/>
        <h4>{this.context.username}</h4>
      </div>
    );
  }
}

export default Profile;
