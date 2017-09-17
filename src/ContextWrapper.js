import React, { Component } from 'react';

class ContextWrapper extends Component {
  state = {
    authenticated : false,
    username: null,
  }

  static childContextTypes = {
    set_userinfo: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired
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
      authenticated: this.state.authenticated
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default ContextWrapper;
