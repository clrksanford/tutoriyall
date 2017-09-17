import React, { Component } from 'react';

class ContextWrapper extends Component {
  state = {
    user_id: window.localStorage.getItem('user_id'),
    username: window.localStorage.getItem('username'),
    avatar_url: window.localStorage.getItem('avatar_url'),
    authenticated : this.is_authenticated()
  }

  is_authenticated(){
    return window.localStorage.getItem('user_id') > 0
  }
  static childContextTypes = {
    set_userinfo: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired,
    user_id: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string.isRequired
  }

  getChildContext(){
    return {
      set_userinfo: (userinfo)=>{
        console.log("in context manager")
        console.log(userinfo)
        window.localStorage.setItem('user_id', userinfo['user_id'])
        window.localStorage.setItem('username', userinfo['username'])
        window.localStorage.setItem('avatar_url', userinfo['avatar_url'])
        this.setState({user_id:userinfo['user_id']})
        this.setState({username:userinfo['username']})
        this.setState({avatar_url:userinfo['avatar_url']})
        this.setState({authenticated:true})
      },
      authenticated: this.state.authenticated,
      user_id: this.state.user_id,
      username: this.state.username,
      avatar_url: this.state.avatar_url,
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default ContextWrapper;
