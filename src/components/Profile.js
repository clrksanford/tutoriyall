import React, {Component} from 'react';

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
      <div>
        <div>user profile</div>
        <img src={this.context.avatar_url} width="100px"/>
        <h4>{this.context.username}</h4>
      </div>
    );
  }
}

export default Profile;
